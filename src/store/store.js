import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/index";

const store = createStore(rootReducers, applyMiddleware(thunk)); //removed redux-logger, run "yarn add redux-logger" to add

export default store;
