import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoList extends Component {
    render() {
        if (!this.props.videos) {
            return <div></div>;
        }

        return (
            <ul>
                {
                    this.props.videos.map(video => (
                        <li key={video.id.videoId}>{ video.snippet.title }</li>
                    ))
                }
            </ul>
        );
    }
}

function mapStateToProps({ videos }) {
    return { videos };
}

export default connect(mapStateToProps)(VideoList);
