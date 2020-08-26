import { GET_CENTERS, GET_CENTER } from '../src/action'

const centers = (state = [], action) => {
  switch (action.type) {
    case GET_CENTERS:
      return [...state, ...action.centers]
    case GET_CENTER:
      return state.filter((ele, idx) => action.id === idx)
    default:
      return state
  }
}

export default centers;