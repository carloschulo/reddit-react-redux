import { ADD_FAV, DELETE_FAV } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_FAV:
      return [...state, {
        id: action.id,
        link: action.url
      }]
    case DELETE_FAV:
      return state
    default:
      return state
  }
}