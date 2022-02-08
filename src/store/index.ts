import { createStore, compose } from "redux";
import rootReducer from "./reducer";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //为了开发环境使用redux-devtools
const store = createStore(rootReducer, composeEnhancers());

export default store;
