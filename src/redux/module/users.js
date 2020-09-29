import { call, put, takeLatest } from "redux-saga/effects";
import UserService from "../../service/UserService";

const prefix = "bluedot/user";

const START = `${prefix}/START`;
const ARTISTS_SUCCESS = `${prefix}/ARTISTS_SUCCESS`;
const USER_SUCCESS = `${prefix}/USER_SUCCESS`;
const FAIL = `${prefix}/FAIL`;

export const userStart = () => ({ type: START });
export const artistsSuccess = (users) => ({ type: ARTISTS_SUCCESS, users });
export const userSuccess = (user) => ({ type: USER_SUCCESS, user });
export const userFail = (error) => ({ type: FAIL, error });

const initialState = {
  loading: false,
  users: null,
  profileUser: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ARTISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,

        error: null,
      };
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        profileUser: action.user,
        error: null,
      };
    case FAIL:
      return {
        loading: false,
        users: null,
        error: action.error,
      };
    default:
      return state;
  }
};

//saga-actions
const START_GET_ARTISTS = `START_GET_ARTISTS`;
const START_GET_USER = `START_GET_USER`;

export const startGetArtists = () => ({
  type: START_GET_ARTISTS,
});
export const startGetUser = () => ({
  type: START_GET_USER,
});

//saga-reducer
function* startGetArtistsSaga() {
  try {
    yield put(userStart());
    const artists = yield call(UserService.getArtists);
    yield put(artistsSuccess(artists));
  } catch (error) {
    yield put(userFail(error));
  }
}
//saga-reducer
function* startGetUserSaga() {
  try {
    yield put(userStart());
    const user = yield call(UserService.getUser);
    yield put(userSuccess(user));
  } catch (error) {
    yield put(userFail(error));
  }
}

export function* userSaga() {
  yield takeLatest(START_GET_ARTISTS, startGetArtistsSaga);
  yield takeLatest(START_GET_USER, startGetUserSaga);
}
