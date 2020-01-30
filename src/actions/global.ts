// eslint-disable-next-line import/prefer-default-export
export const setVisited = (visited: boolean) => (dispatch: any) => {
  dispatch({ type: 'SET_VISITED', payload: visited });
};
