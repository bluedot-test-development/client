import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import posts from './posts';
import videos from './videos';

export default history =>
  combineReducers({
    auth,
    users,
    posts,
    videos,
    router: connectRouter(history),
  });
