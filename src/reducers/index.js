import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { SET_SEARCH_KEY, SET_VIDEOS } from '../actions';

const searchText = handleActions(
    {
        [SET_SEARCH_KEY]: (state, action) => action.payload
    },
    ""
);

const videos = handleActions(
    {
        [SET_VIDEOS]: (state, action) => action.payload
    },
    []
);

const rootReducer = combineReducers({
  searchText,
  videos
});

export default rootReducer;
