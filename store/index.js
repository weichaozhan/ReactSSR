import { combineReducers, applyMiddleware, legacy_createStore as createStore, compose } from "redux";
import thunk from "redux-thunk";

import { reducer as homeReducer } from '../reducers/index';

const reducer = combineReducers({
  home: homeReducer,
});

export const getStore = () => createStore(reducer, compose(applyMiddleware(thunk)));
export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {};
  return createStore(reducer, defaultState, compose(applyMiddleware(thunk)));
};
