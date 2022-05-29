import { combineReducers, applyMiddleware, legacy_createStore as createStore, compose } from "redux";
import thunk from "redux-thunk";

import { reducer as homeReducer } from '../reducers/index';

const reducer = combineReducers({
  home: homeReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
