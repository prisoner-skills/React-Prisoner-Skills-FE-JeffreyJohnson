import { 
    FETCH_PRISONER_FAILURE,
    FETCH_PRISONER_START,
    FETCH_PRISONER_SUCCESS } from '../actions';

const initialState = {
// define a few properties here.
// Array characters, Boolean fetching, null error.

prisonsers:[],
isFetching: false,
error: null
};
export const prisonersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRISONER_START:
        return { ...state, isFetching: true };
      case FETCH_PRISONER_SUCCESS:
        return { ...state, isFetching: false, prisoners: [...state.prisoners, ...action.payload] };
        
      case FETCH_PRISONER_FAILURE:
        return { ...state, isFetching: false, error: action.payload };
      default:
        return state;
    }
  };
  export default prisonersReducer;