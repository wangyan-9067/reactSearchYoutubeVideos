import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoList extends Component {
    render() {
        console.log(this.props.videos);

        if (!this.props.videos) {
            return <div></div>;
        }

        return (
            <div className="col-md-4">
                <ul className="list-group">
                    {
                        this.props.videos.map(video => (
                            <li className="list-group-item videolist-video-cell" key={video.id.videoId}>
                                <img className="media col-sm-4" src={ video.snippet.thumbnails.default.url } />
                                <span className="list-group-item-text col-sm-8">{ video.snippet.title }</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ videos }) {
    return { videos };
}

export default connect(mapStateToProps)(VideoList);
