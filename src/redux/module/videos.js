import { call, put, takeLatest } from 'redux-saga/effects';
import VideoService from '../../service/VideoService';

const prefix = 'bluedot/video';

const START = `${prefix}/START`;
const SUCCESS = `${prefix}/SUCCESS`;
const FAIL = `${prefix}/FAIL`;

export const videoStart = () => ({ type: START });
export const videoSuccess = videos => ({ type: SUCCESS, videos });
export const videoFail = error => ({ type: FAIL, error });

const initialState = {
  loading: false,
  videos: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        loading: true,
        videos: null,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        videos: action.videos,
        error: null,
      };
    case FAIL:
      return {
        loading: false,
        videos: null,
        error: action.error,
      };
    default:
      return state;
  }
};

//saga-actions
const START_GET_VIDEOS = `START_GET_VIDEOS`;

export const startGetVideos = () => ({
  type: START_GET_VIDEOS,
});

//saga-reducer

function* startGetVideoSaga() {
  try {
    yield put(videoStart());
    const video = yield call(VideoService.getVideos);
    yield put(videoSuccess(video));
  } catch (error) {
    yield put(videoFail(error));
  }
}

export function* videoSaga() {
  yield takeLatest(START_GET_VIDEOS, startGetVideoSaga);
}
