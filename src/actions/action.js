import * as imageUrl from '../imageUrl';

export const GET_CENTERS = 'GET_CENTERS';
export const GET_CENTER = 'GET_CENTER';
export const POST_USER = 'POST_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const BOOK_APPOINTMENT = 'SHEDULE_APPOINTMENT';
export const GET_APPOINTMENTS = 'SET_APPOINTMENTS';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const NOT_LOGGED_IN = 'NOT_LOGGED_IN';
export const CLEAR_STATUS = 'CLEAR_STATUS';
export const CLEAR_APPOINTMENTS = 'CLEAR_APPOINTMENTS';

export const getCenters = centers => ({
  type: GET_CENTERS,
  centers,
});

export const getCenter = id => ({
  type: GET_CENTER,
  id,
});

export const postUser = user => ({
  type: POST_USER,
  user,
});

export const getAppointments = appointments => ({
  type: GET_APPOINTMENTS,
  appointments,
});

export const bookAppointment = booking => ({
  type: BOOK_APPOINTMENT,
  booking,
});

export const addUser = username => ({
  type: ADD_USER,
  username,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});

export const clearAppointments = () => ({
  type: CLEAR_APPOINTMENTS,
});

export const notLoggedIn = status => ({
  type: NOT_LOGGED_IN,
  status,
});

export const clearStatus = () => ({
  type: CLEAR_STATUS,
});

export const receiveCenters = () => {
  const url = `${imageUrl.herokuHost}/api/v1/centers`;
  return dispatch => {
    fetch(url, {
      method: 'GET',
      mode: 'cors',
    })
      .then(response => response.json())
      .then(data => {
        dispatch(getCenters(data));
      });
  };
};

export const receiveUser = data => {
  const url = `${imageUrl.herokuHost}/registrations`;
  return dispatch => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: data,
    })
      .then(response => response.json())
      .then(data => dispatch(postUser(data)));
  };
};

export const sheduleMeeting = data => {
  const url = `${imageUrl.herokuHost}/appointments`;
  return dispatch => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: data,
    })
      .then(response => response.json())
      .then(({ appointment }) => dispatch(bookAppointment(appointment)));
  };
};

export const receiveAppointments = userId => {
  const url = `${imageUrl.herokuHost}/appointments/${userId}`;
  return dispatch => {
    fetch(url, {
      method: 'GET',
      mode: 'cors',
    })
      .then(response => response.json())
      .then(({ appointments }) => {
        dispatch(getAppointments(appointments));
      });
  };
};

export const authenticateUser = (data, cb) => {
  const url = `${imageUrl.herokuHost}/sessions`;
  return dispatch => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: data,
    }, { withCredentials: true })
      .then(response => (response.json()))
      .then(({ status, currentUser }) => {
        if (status === 'created') {
          localStorage.setItem('current_user', currentUser.username);
          localStorage.setItem('user_id', currentUser.id);
          dispatch(addUser(currentUser.username));
          cb();
        } else (dispatch(notLoggedIn('Invalid credentials')));
      });
  };
};
