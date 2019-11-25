import {
  GET_SMURF_DATA,
  GET_SMURF_DATA_SUCCESS,
  GET_SMURF_DATA_FAIL,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURF_DATA:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case GET_SMURF_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: ""
      };
    case GET_SMURF_DATA_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,

        isLoading: true,
        error: ""
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: ""
      };
    case ADD_SMURF_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
