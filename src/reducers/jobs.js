import { initialState } from "../store";
import { FETCH_JOBS } from '../actions/index'

const jobsReducer = (state = initialState.jobs, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_JOBS:
      return {
        ...state,
        elements: payload,
      };
    default:
      return state;
  }
}

export default jobsReducer;