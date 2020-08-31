export const GET_CENTERS = 'GET_CENTERS';
export const GET_CENTER = 'GET_CENTER';
export const POST_USER = 'POST_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const BOOK_APPOINTMENT = 'SHEDULE_APPOINTMENT';
export const GET_APPOINTMENTS = 'SET_APPOINTMENTS';

export const getCenters = (centers) => {
  return {
    type: GET_CENTERS,
    centers
  }
}

export const getCenter = (id) => {
  return {
    type: GET_CENTER,
    id
  }
}

export const postUser = (user) => {
  return {
    type: POST_USER,
    user
  }
}

export const getAppointments = (appointments) => {
  return {
    type: GET_APPOINTMENTS,
    appointments
  }
}

export const bookAppointment = (booking) => {
  return {
    type: BOOK_APPOINTMENT,
    booking
  }
}

export const receiveCenters = () => {
  const url = `http://localhost:3002/api/v1/centers`
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(getCenters(data))
      });
  }
}

export const receiveUser = (data) => {
  const url = `http://localhost:3002/registrations`
  return dispatch => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: data
    })
      .then(response => response.json())
      .then(data => dispatch(postUser(data)))
  }
}

export const sheduleMeeting = (data) => {
  const url = `http://localhost:3002/appointments`
  return dispatch => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: data
    })
      .then(response => response.json())
      .then(({ appointment }) =>
        dispatch(bookAppointment(appointment)))
  }
}

export const receiveAppointments = (username) => {
  const url = `http://localhost:3002/appointments/${username}`
  return dispatch => {
    fetch(url, {
      method: 'GET',
      mode: 'cors'
    })
      .then(response => response.json())
      .then(({ appointments }) => {
        dispatch(getAppointments(appointments))
      });
  }
}

export const authenticateUser = (data, cb) => {
  console.log(data);
  const url = `http://localhost:3002/sessions`
  return dispatch => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: data
    },
      { withCredentials: true }
    )
      .then(response => response.json())
      .then(({ current_user }) => {
        localStorage.setItem('current_user', current_user.username)
        cb();
      });
  };
}