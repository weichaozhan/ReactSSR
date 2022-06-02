
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from '../app/Routes.jsx';
import { getClientStore } from '../store/index.js';

const App = () => (
  <Provider store={getClientStore()} >
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  </Provider>
);

hydrateRoot(document.getElementById('root'), <App/>);
