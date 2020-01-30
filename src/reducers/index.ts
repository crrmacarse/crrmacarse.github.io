import { combineReducers } from 'redux';
import sampleReducer from './sample';
import sampleReducerWithActions from './sample-with-actions';
import projects from './projects';
import globals from './globals';
// import { createReducer } from 'typesafe-actions';

export default combineReducers({
  globals,
  projects,
  sampleReducer,
  sampleReducerWithActions,
});
