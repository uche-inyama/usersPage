import { combineReducers } from 'redux';
import { centers, user, appointmentBookings, currentUser } from './reducer'

export default combineReducers({
  user,
  centers,
  appointmentBookings
})