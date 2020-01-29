import { combineReducers } from 'redux';
import sampleReducer from './sample';
import sampleReducerWithActions from './sample-with-actions';
import projects from './projects';
// import { createReducer } from 'typesafe-actions';

export default combineReducers({
  projects,
  sampleReducer,
  sampleReducerWithActions,
});
