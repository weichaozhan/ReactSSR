import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import Routes from '../app/Routes.jsx';
import store from '../store/index.js';

export const render = (req) => {
  // 服务端路由
  const content = renderToString(
    <Provider store={store} >
      <StaticRouter location={req.path}>
        {Routes}
      </StaticRouter>
    </Provider>
  );
  console.log('content', content);
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
};
