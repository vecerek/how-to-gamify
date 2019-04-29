import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, combineReducers,createStore } from 'redux';
import { Provider } from 'react-redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk';
import { ConnectedRouter } from 'connected-react-router'
import rootReducer from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory({});

const middleware = [
  routerMiddleware(history),
  thunkMiddleware,
];

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');

  middleware.push(
    createLogger({ collapsed: true })
  );
}

const store = createStore(
  combineReducers(
    Object.assign({}, rootReducer, {
      router: connectRouter(history),
    })
  ),
  compose(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
