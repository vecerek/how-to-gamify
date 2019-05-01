import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import getStarted from './GetStarted';
import results from './Results';

export default history => combineReducers({
  router: connectRouter(history),
  getStarted,
  results
});
