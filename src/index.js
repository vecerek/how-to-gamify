import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk';
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import createRootReducer from './reducers';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

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

const enhancer = applyMiddleware(...middleware);
const store = createStore(createRootReducer(history), undefined, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
