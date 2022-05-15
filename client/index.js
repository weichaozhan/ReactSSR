
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../app/Routes.jsx';

const App = () => (
  <BrowserRouter>
    {Routes}
  </BrowserRouter>
);

hydrateRoot(document.getElementById('root'), <App/>);
