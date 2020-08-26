import { GET_CENTERS, GET_CENTER } from '../src/action'

const centers = (state = [], action) => {
  switch (action.type) {
    case GET_CENTERS:
      return [...state, ...action.centers]
    case GET_CENTER:
      return
    default:
      return state
  }
}

export default centers;