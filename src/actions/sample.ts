// let nextTodoId = 0;

// export const addTodo = (text: string) => ({
//   type: 'ADD_TODO',
//   id: nextTodoId += 1,
//   text,
// });

export const setVisibilityFilter = (filter: boolean) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
