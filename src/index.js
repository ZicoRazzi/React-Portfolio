import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './App';
import Typography from './styles/Typography';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <Typography />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
