import { ADD_FAV, DELETE_FAV } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_FAV:
      return [...state, {
        id: action.id,
        link: action.link,
        title: action.title
      }]
    case DELETE_FAV:
      return state.filter(fav => fav.id !== action.id)
    default:
      return state
  }
}