import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import VideoList from '../containers/VideoList';

export default class App extends Component {
  render() {
    return (
        <div>
            <SearchBar />
            <VideoList />
        </div>
    );
  }
}
