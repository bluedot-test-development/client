import { call, put, takeLatest } from "redux-saga/effects";
import UserService from "../../service/UserService";

const prefix = "bluedot/posts";

const START = `${prefix}START`;
const SUCCESS = `${prefix}SUCCESS`;
const FAIL = `${prefix}FAIL`;

export const postStart = () => ({ type: START });
export const postSuccess = (posts) => ({ type: SUCCESS, posts });
export const postFail = (error) => ({ type: FAIL, error });

const initialState = {
  loading: false,
  posts: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        loading: true,
        posts: null,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        posts: action.posts,
        error: null,
      };
    case FAIL:
      return {
        loading: false,
        posts: null,
        error: action.error,
      };
    default:
      return state;
  }
};

//saga-actions
const START_GET_POSTS = `START_GET_POSTS`;
const START_GET_MUSIC_POSTS = `START_GET_MUSIC_POSTS`;

export const startGetPosts = () => ({
  type: START_GET_POSTS,
});
export const startGetMusicPosts = () => ({
  type: START_GET_MUSIC_POSTS,
});

//saga-reducer

function* startGetPostSaga() {
  try {
    yield put(postStart());
    console.log("??");
    const posts = yield call(UserService.getPosts);
    yield put(postSuccess(posts));
  } catch (error) {
    yield put(postFail(error));
  }
}
function* startGetMusicPostSaga() {
  try {
    yield put(postStart());
    const posts = yield call(UserService.getPosts);
    yield put(postSuccess(posts));
  } catch (error) {
    yield put(postFail(error));
  }
}

export function* postSaga() {
  yield takeLatest(START_GET_POSTS, startGetPostSaga);
}
export function* musicPostSaga() {
  yield takeLatest(START_GET_MUSIC_POSTS, startGetMusicPostSaga);
}
