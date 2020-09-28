import { all } from "redux-saga/effects";
import { userSaga } from "../module/users";

export default function* rootSaga() {
  yield all([userSaga()]);
}
