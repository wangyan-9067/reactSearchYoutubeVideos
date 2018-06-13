import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchKey, setVideos } from '../actions';
import searchYouTube from 'youtube-api-search';

const API_KEY = "AIzaSyCXIQb8Yk-iapWVPvNAE6eTqqVFO9wDF10";

class SearchBar extends Component {
    onSearchKeyChange(event) {
        let value = event.target.value;

        this.props.setSearchKey(value);
        this.search(value);
    }

    search(value) {
        searchYouTube({key: API_KEY, term: value, maxResults: 6}, (videos) => {
            this.props.setVideos(videos);
        });
    }

    render() {
        return (
            <input className="col-md-6 form-control" type="text" placeholder="Search a video"
                onChange={ this.onSearchKeyChange.bind(this) } />
        )
    };
}

export default connect(null, { setSearchKey, setVideos })(SearchBar);
