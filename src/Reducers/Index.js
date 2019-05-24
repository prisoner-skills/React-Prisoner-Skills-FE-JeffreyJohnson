import { combineReducers } from 'redux';
import  prisonsReducer  from './prisonsReducer';
import prisonersReducer from './prisonerReducer';
const rootReducer =combineReducers({
  prisoners:prisonersReducer,
  prisons:prisonsReducer
});
export default rootReducer;
