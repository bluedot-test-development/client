import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from "./auth";
import users from "./users";

export default (history) =>
  combineReducers({
    auth,
    users,
    router: connectRouter(history),
  });
