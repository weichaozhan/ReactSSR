import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Test from './Test.jsx';

export const routes = [
  {
    path: "/",
    element: <Home/>,
    exact: true,
    loadData: Home.loadData,// 服务端获取异步数据的函数
    key: 'home'
  },
  {
    path: '/test',
    element: <Test/>,
    exact: true,
    key: 'login'
  }
];

export default (
  <div>
    <Nav />
    <Routes>
      {routes.map(item => (
        <Route {...item}></Route>
      ))}
    </Routes>
  </div>
)
