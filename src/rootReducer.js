import { combineReducers } from 'redux';
import { centers, user, appointmentBookings } from './reducer'

export default combineReducers({
  centers,
  user,
  appointmentBookings
})