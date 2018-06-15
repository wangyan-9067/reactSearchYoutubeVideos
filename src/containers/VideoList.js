import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedVideo } from '../actions';
import PropTypes from 'prop-types';

class VideoList extends Component {
    onClick(video) {
        this.props.setSelectedVideo(video);
    }

    render() {
        return (
            <ul className="list-group">
                {
                    this.props.videos.map(video => (
                        <a
                            onClick={ this.onClick.bind(this, video) }
                            className="list-group-item list-group-item-action videolist-video-cell"
                            key={video.id.videoId}>
                            <img className="media col-sm-4" src={ video.snippet.thumbnails.default.url } />
                            <span className="list-group-item-text col-sm-8">{ video.snippet.title }</span>
                        </a>
                    ))
                }
            </ul>
        );
    }
}

function mapStateToProps({ videos }) {
    return { videos };
}

VideoList.propTypes = {
    videos: PropTypes.array,
    setSelectedVideo: PropTypes.func
};

export default connect(mapStateToProps, { setSelectedVideo })(VideoList);
