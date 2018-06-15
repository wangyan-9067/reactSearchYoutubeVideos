import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedVideo extends Component {
    render() {
        if (!this.props.selectedVideo) {
            return <div></div>;
        }

        const { title, description } = this.props.selectedVideo.snippet;

        return (
            <div>
                <div className="selectedVideo-image"></div>
                <h4>{ title }</h4>
                <div>{ description }</div>
            </div>
        );
    }
}

function mapStateToProps({ selectedVideo }) {
    return { selectedVideo };
}

export default connect(mapStateToProps)(SelectedVideo);
