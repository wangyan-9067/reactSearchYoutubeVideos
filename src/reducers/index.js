import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { setSearchKey, setVideos } from '../actions';

const searchText = handleActions(
    {
        [setSearchKey]: (state, action) => action.payload
    },
    ""
);

const videos = handleActions(
    {
        [setVideos]: (state, action) => action.payload
    },
    []
);

const rootReducer = combineReducers({
  searchText,
  videos
});

export default rootReducer;
