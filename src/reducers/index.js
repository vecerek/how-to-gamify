import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import getStarted from './GetStarted';

export default history => combineReducers({
  router: connectRouter(history),
  getStarted
});
