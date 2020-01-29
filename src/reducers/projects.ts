// import { action } from 'typesafe-actions';
import { FETCH_PROJECTS, FETCHED_PROJECTS } from 'actions/projects';

// @TODO: Research for typed-actions

export type STATE_PROPS = {
  isFetching: boolean,
  list: []
}

const INITIAL_STATE: STATE_PROPS = {
  isFetching: false,
  list: [],
};

export default (state = INITIAL_STATE, { type, payload }: { type: any, payload: any }) => {
  switch (type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        isFetching: true,
        list: [],
      };
    case FETCHED_PROJECTS:
      return {
        ...state,
        isFetching: false,
        list: payload,
      };
    default:
      return state;
  }
};
