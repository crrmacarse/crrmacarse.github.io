import { VisibilityFilters } from 'actions/sample';

export default (state = VisibilityFilters.SHOW_ALL, action: any) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};
