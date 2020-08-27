import { GET_CENTERS, GET_CENTER, POST_USER } from '../src/action'

export const centers = (state = [], action) => {
  switch (action.type) {
    case GET_CENTERS:
      return [...state, ...action.centers]
    case GET_CENTER:
      return
    default:
      return state
  }
}

export const users = (state = [], action) => {
  switch (action.type) {
    case POST_USER:
      return [...state, action.user]
    default:
      return state
  }
}

