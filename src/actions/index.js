import { createAction } from 'redux-actions';
import searchYouTube from 'youtube-api-search';

const API_KEY = "AIzaSyCXIQb8Yk-iapWVPvNAE6eTqqVFO9wDF10";

export const SET_SEARCH_KEY = "SET_SEARCH_KEY";
export const SET_VIDEOS = "SET_VIDEOS";

export const setSearchKey = createAction(SET_SEARCH_KEY);

export const search = createAction(SET_VIDEOS, value => {
    let promise = new Promise(function (resolve) {
        searchYouTube({key: API_KEY, term: value, maxResults: 6}, (videos) => {
            resolve(videos);
        });
    });

    return promise;
});
