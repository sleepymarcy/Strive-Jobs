import { initialState } from "../store";
import { ADD_TO_FAV, REMOVE_FROM_FAV } from '../actions/index'

const favouritesReducer = (state = initialState.favourites, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        elements: [...state.elements, action.payload],
      };
    case REMOVE_FROM_FAV:
      return {
        ...state,
        elements: state.elements.filter((company) => company !== action.payload),
      };
    default:
      return state;
  }
}

export default favouritesReducer;