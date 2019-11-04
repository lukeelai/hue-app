import { createStore, combineReducers } from "redux";

//Reducers
import lights from "../reducers/lights";

export default () => {
  const store = createStore(
    combineReducers({ lights }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log(store.getState());
  return store;
};
