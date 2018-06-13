import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchKey, search } from '../actions';

class SearchBar extends Component {
    onSearchKeyChange(event) {
        let value = event.target.value;

        this.props.setSearchKey(value);
        this.props.search(value);
    }

    render() {
        return (
            <div className="col-md-8">
                <input className="form-control" type="text" placeholder="Search a video"
                    onChange={ this.onSearchKeyChange.bind(this) } />
            </div>
        )
    };
}

export default connect(null, { setSearchKey, search })(SearchBar);
