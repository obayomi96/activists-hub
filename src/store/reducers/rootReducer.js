import { combineReducers } from 'redux'
import { activistsReducer } from './activistsReducer';

const rootReducer = combineReducers({
  activist: activistsReducer
});

export default rootReducer
