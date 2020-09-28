import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configStore from "./redux/config";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
const store = configStore(history);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
