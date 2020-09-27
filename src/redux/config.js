import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./module/reducer";

const configStore = (history) => {
  const store = createStore(
    reducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history)))
  );

  return store;
};

export default configStore;
