import {
  GET_CENTERS,
  ADD_USER,
  REMOVE_USER,
  NOT_LOGGED_IN,
  CLEAR_STATUS,
  // GET_CENTER,
  POST_USER,
  BOOK_APPOINTMENT,
  GET_APPOINTMENTS,
} from './action';

export const centers = (state = [], action) => {
  switch (action.type) {
    case GET_CENTERS:
      return [...state, ...action.centers];
    // case GET_CENTER:
    //   return;
    default:
      return state;
  }
};

export const user = (state = null, action) => {
  switch (action.type) {
    case POST_USER:
      return action.user;
    default:
      return state;
  }
};

export const currentUser = (state = null, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.username;
    case REMOVE_USER:
      return null;
    default:
      return state;
  }
};

export const status = (state = null, action) => {
  switch (action.type) {
    case NOT_LOGGED_IN:
      return action.status;
    case CLEAR_STATUS:
      return null;
    default:
      return state;
  }
};

export const appointmentBookings = (state = [], action) => {
  switch (action.type) {
    case BOOK_APPOINTMENT:
      return [...state, action.booking];
    case GET_APPOINTMENTS:
      return [...state, ...action.appointments];
    default:
      return state;
  }
};
