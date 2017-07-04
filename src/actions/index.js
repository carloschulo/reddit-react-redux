export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";

export function addFav(id, link, title) {
  return {
    type: ADD_FAV,
    id,
    link,
    title
  };
}

export function deleteFav(id) {
  return {
    type: DELETE_FAV,
    id
  };
}
