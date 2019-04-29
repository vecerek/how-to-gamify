import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const middleware = [
  thunkMiddleware,
];

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');

  middleware.push(
    createLogger({ collapsed: true })
  );
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
