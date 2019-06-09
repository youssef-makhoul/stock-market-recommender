import { createStore, compose } from "redux";
// import loggerMiddleware from 'redux-logger';
import reducer from "./reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers();

//applyMiddleware(loggerMiddleware)
// other store enhancers if any like redux-saga or redux-thunk

const store = () => createStore(reducer, enhancer);

export default store;
