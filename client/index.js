
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from '../app/Routes.jsx';
import store from '../store/index.js';

const App = () => (
  <Provider store={store()} >
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  </Provider>
);

hydrateRoot(document.getElementById('root'), <App/>);
