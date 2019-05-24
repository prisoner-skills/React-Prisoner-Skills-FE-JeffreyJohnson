import { FETCH_DATA_START,
         FETCH_DATA_SUCCESS, 
         FETCH_DATA_FAILURE,
         } from '../actions';

const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  prisons: [],
  isFetching: false,
  error: null
};

export const prisonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return { ...state, isFetching: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, isFetching: false, prisons: [...state.prisons, ...action.payload] };
      
    case FETCH_DATA_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
export default prisonsReducer;
