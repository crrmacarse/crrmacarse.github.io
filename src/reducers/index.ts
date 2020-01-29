import { combineReducers } from 'redux';
import sampleReducer from './sample';
import sampleReducerWithActions from './sample-with-actions';
// import { createReducer } from 'typesafe-actions';

export default combineReducers({
  sampleReducer,
  sampleReducerWithActions,
});
