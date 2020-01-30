
const INITIAL_STATE = {
  visited: false,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_VISITED':
      return {
        ...state,
        visited: action.payload,
      };
    default:
      return state;
  }
};
