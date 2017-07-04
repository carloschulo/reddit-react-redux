import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import rootReducer from "./reducers";
import { loadState } from './localStorage';

const middlewares = [createLogger()];
const persistedState = loadState();

export default createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
