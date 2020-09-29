import { all } from 'redux-saga/effects';
import { musicPostSaga, postSaga } from '../module/posts';
import { userSaga } from '../module/users';
import { videoSaga } from '../module/videos';

export default function* rootSaga() {
  yield all([userSaga(), postSaga(), musicPostSaga(), videoSaga()]);
}
