import { combineReducers } from 'redux';
import { centers, users } from './reducer'

export default combineReducers({
  centers,
  users
})