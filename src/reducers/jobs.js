import { initialState } from "../store";
import { FETCH_JOBS } from '../actions/index'

const jobsReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        elements: [...state.elements, action.payload],
      };
    default:
      return state;
  }
}

export default jobsReducer;