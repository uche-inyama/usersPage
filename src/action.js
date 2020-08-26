export const GET_CENTERS = 'GET_CENTERS';
export const GET_CENTER = 'GET_CENTER'


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