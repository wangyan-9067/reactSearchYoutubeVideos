import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { SET_SEARCH_KEY, SET_VIDEOS, SET_SELECTED_VIDEO } from '../actions';

const searchText = handleActions(
    {
        [SET_SEARCH_KEY]: (state, action) => ({ ... state, searchText: action.payload })
    },
    { searchText: "" }
);

const videos = handleActions(
    {
        [SET_VIDEOS]: (state, action) => action.payload
    },
    []
);

const selectedVideo = handleActions(
    {
        [SET_SELECTED_VIDEO]: (state, action) => action.payload
    },
    null
)

const rootReducer = combineReducers({
  searchText,
  videos,
  selectedVideo
});

export default rootReducer;
