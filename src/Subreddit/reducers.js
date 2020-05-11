import { combineReducers } from 'redux';
import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from './actions';

function selectedSubreddit(state = 'reactjs', action) {
  let retVal;

  switch (action.type) {
    case SELECT_SUBREDDIT:
      retVal = action.subreddit;
      break;
    default:
      retVal =state;
      break;
  }

  return retVal;
}

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: [],
}, action) {
  let retVal;

  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      retVal = Object.assign({}, state, {
        didInvalidate: true,
      });
      break;
    case REQUEST_POSTS:
      retVal = Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
      break;
    case RECEIVE_POSTS:
      retVal = Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdate: action.receivedAt,
      });
      break;
    default:
      retVal = state;
      break;
  }

  return retVal;
}

function postsBySubreddit(state = {}, action) {
  let retVal;

  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      // intentional fallthrough
    case RECEIVE_POSTS:
      // intentional fallthrough
    case REQUEST_POSTS:
      retVal = Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action),
      });
      break;
    default:
      retVal = state;
  }

  return retVal;
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
});

export default rootReducer;
