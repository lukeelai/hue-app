import { createStore, combineReducers } from "redux";

//Reducers

export default () => {
  const store = createStore(
    combineReducers({}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log(store.getState());
  return store;
};
