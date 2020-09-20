import { combineReducers } from 'redux';
import {
  user,
  status,
  centers,
  currentUser,
  appointmentBookings,
} from './reducer';

export default combineReducers({
  user,
  status,
  centers,
  currentUser,
  appointmentBookings,
});
