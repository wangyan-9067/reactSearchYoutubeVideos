import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import VideoList from '../containers/VideoList';
import SelectedVideo from '../containers/SelectedVideo';

export default class App extends Component {
  render() {
    return (
        <div>
            <div className="col-md-8">
                <SearchBar />
                <SelectedVideo />
            </div>
            <div className="col-md-4">
                <VideoList />
            </div>
        </div>
    );
  }
}
