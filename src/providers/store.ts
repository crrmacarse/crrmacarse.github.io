import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware: any = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
