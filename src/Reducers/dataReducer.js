import { FETCHING_DATA,
         FETCHING_DATA_SUCCESS, 
         FETCHING_DATA_FAILURE } from '../actions';

const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  data: [],
  isFetching: false,
  error: null
};

export const prisonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { ...state, isFetching: true };
    case FETCHING_DATA_SUCCESS:
      return { ...state, isFetching: false, data: [...state.data, ...action.payload] };
    case FETCHING_DATA_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};