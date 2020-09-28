import { call, put, takeEvery } from "redux-saga/effects";
import UserService from "../../service/UserService";

const prefix = "bluedot/user";

const START = `${prefix}START`;
const SUCCESS = `${prefix}SUCCESS`;
const FAIL = `${prefix}FAIL`;

export const userStart = () => ({ type: START });
export const userSuccess = (users) => ({ type: SUCCESS, users });
export const userFail = (error) => ({ type: FAIL, error });

const initialState = {
  loading: false,
  users: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        loading: true,
        users: null,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        users: action.users,
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

export const startGetArtists = () => ({
  type: START_GET_ARTISTS,
});

//saga-reducer
function* startGetArtistsSaga() {
  try {
    yield put(userStart());
    console.log("??");
    const artists = yield call(UserService.getArtists);
    yield put(userSuccess(artists));
  } catch (error) {
    yield put(userFail(error));
  }
}

export function* userSaga() {
  yield takeEvery(START_GET_ARTISTS, startGetArtistsSaga);
}
