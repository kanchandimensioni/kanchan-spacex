import { combineReducers } from 'redux';
import launchesReducers from './launchesReducers';

export default combineReducers({
  launches: launchesReducers
});
