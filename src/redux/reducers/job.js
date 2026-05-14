import { GET_JOBS, GET_JOBS_LOADING, GET_JOBS_ERROR } from "../actions";

const initialState = {
  results: [],
  isLoading: false,
  isError: false,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return { ...state, results: action.payload };
    case GET_JOBS_LOADING:
      return { ...state, isLoading: action.payload };
    case GET_JOBS_ERROR:
      return { ...state, isError: action.payload };
    default:
      return state;
  }
};

export default jobReducer;
