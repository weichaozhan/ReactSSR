import React from 'react';
import { matchRoutes } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import Routes from '../app/Routes.jsx';
import { getStore } from '../store/index.js';
import { routes } from '../app/Routes.jsx';
import StaticContxt from '../context/staticContxt.js';

export const render = (req) => {
  // 调用 matchRoutes 用来匹配当前路由
  try {
    const store = getStore();
    const matchedRoutes = matchRoutes(routes, req.path);
    
    const promises = [];

    matchedRoutes?.forEach(item => {
      if (item.route.loadData) {
        promises.push(item.route.loadData(store));
      }
    });
    return Promise.allSettled(promises)
      .then(() => {
        const css = new Set();
        const insertCss = (...styles) => styles.forEach(style => {
          return css.add(style._getCss());
        });
        // 服务端路由
        const content = renderToString(
          <Provider store={store} >
            <StaticRouter location={req.path}>
              <StaticContxt.Provider value={{ insertCss }}>
                {Routes}
              </StaticContxt.Provider>
            </StaticRouter>
          </Provider>
        );
  
        return `
          <html>
            <head>
              <title>hello</title>
              <meta charset='utf-8' />
              <style>${[...css].join('')}</style>
            </head>
            <body>
              <h1>hello</h1>
              <p>world</p>
              <div>测试</div>
              <div id="root">${content}</div>
              <script>
                window.context = {
                  state: ${JSON.stringify(store.getState())}
                }
              </script>
              <script src="bundle.js"></script>
            </body>
          </html>
        `;
      })
      .catch(err => {
        return err;
      });
  } catch(err) {
    return Promise.resolve(err);
  }

  

};
