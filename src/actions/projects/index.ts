import db from 'providers/firebase/db';
import { FETCH_PROJECTS, FETCHED_PROJECTS } from './types';

export const getProjects = () => (dispatch: any) => {
  dispatch({ type: FETCH_PROJECTS });

  db.ref('/projects').once('value').then((snapshot) => {
    dispatch({ type: FETCHED_PROJECTS, payload: snapshot.val() });
  });
};

export {
  FETCH_PROJECTS,
  FETCHED_PROJECTS,
};
