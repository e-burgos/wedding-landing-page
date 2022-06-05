import { ThemeProvider } from '@material-ui/core/styles';
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';
import React from 'react';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import ThemeConfig from './ThemeConfig';

ReactDOM.render(
  <ThemeProvider theme={ThemeConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root'),
);
