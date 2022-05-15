import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Test from './Test.jsx';

export default (
  <div>
    <Nav />
    <Routes>
      <Route path='/' exact element={<Home/>}></Route>
      <Route path='/test' exact element={<Test/>}></Route>
    </Routes>
  </div>
)
