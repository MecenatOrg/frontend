import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './config/store';
import * as serviceWorker from './config/serviceWorker';
import './config/reset.scss';
import './i18n';

import App from 'app/App';

ReactDOM.render(
  <Suspense fallback="loading">
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
