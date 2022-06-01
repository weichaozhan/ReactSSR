import React from 'react';
import { matchRoutes } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import Routes from '../app/Routes.jsx';
import createStore from '../store/index.js';
import { routes } from '../app/Routes.jsx';

export const render = (req) => {
  // 调用 matchRoutes 用来匹配当前路由
  try {
    const store = createStore();
    const matchedRoutes = matchRoutes(routes, req.path);
    
    const promises = [];

    matchedRoutes?.forEach(item => {
      if (item.route.loadData) {
        promises.push(item.route.loadData(store));
      }
    });
    return Promise.allSettled(promises)
      .then(() => {
        // 服务端路由
        const content = renderToString(
          <Provider store={store} >
            <StaticRouter location={req.path}>
              {Routes}
            </StaticRouter>
          </Provider>
        );
  
        return `
          <html>
            <head>
              <title>hello</title>
              <meta charset='utf-8' />
            </head>
            <body>
              <h1>hello</h1>
              <p>world</p>
              <div>测试</div>
              <div id="root">${content}</div>
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
