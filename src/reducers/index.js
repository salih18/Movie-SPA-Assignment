import { combineReducers } from 'redux';
import alert from './alert';
import data from './data';
import season from './season';
import episode from './episode';

export default combineReducers({
  alert,
  data,
  season,
  episode,
});
