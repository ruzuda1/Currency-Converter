import { combineReducers, legacy_createStore as createStore } from "redux";

import HeaderReducer from "./../Reducer/HeaderReducer";

let reducers = combineReducers({
  headerPage: HeaderReducer,
});

let store = createStore(reducers);

export default store;
