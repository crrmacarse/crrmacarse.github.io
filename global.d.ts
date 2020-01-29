import 'jest-extended';

// @NOTE experimental https://github.com/piotrwitek/react-redux-typescript-guide#redux---typing-patterns
// import { StateType, ActionType } from 'typesafe-actions';

// declare module 'MyTypes' {
  // export type Store = StateType<typeof import('./index').default>;
  // export type RootAction = ActionType<typeof import('./src/actions').default>;
  // export type RootState = StateType<ReturnType<typeof import('./src/reducers').default>>;
// }

// declare module 'typesafe-actions' {
//   interface Types {
//     RootAction: ActionType<typeof import('./src/actions').default>;
//   }
// }
