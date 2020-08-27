export const GET_CENTERS = 'GET_CENTERS';
export const GET_CENTER = 'GET_CENTER';
export const POST_USER = 'POST_USER';

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

const postUser = (user) => {
  return {
    type: POST_USER,
    user
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