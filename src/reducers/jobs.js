import { initialState } from "../store/index";

export default function jobsReducer(state = initialState.jobs, action) {
  console.log(action, state);

  const { type, payload } = action;

  switch (type) {
    case "FETCH_JOBS":
      return {
        ...state,
        elements: payload,
      };
    default:
      return state;
  }
}