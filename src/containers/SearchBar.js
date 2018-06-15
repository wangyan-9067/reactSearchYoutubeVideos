import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { setSearchKey, search } from '../actions';

class SearchBar extends Component {
    onSearchKeyChange(value) {
        this.props.setSearchKey(value);
        this.props.search(value);
    }

    render() {
        let delay = _.debounce( (value) => this.onSearchKeyChange(value), 1500);

        return (
            <input className="form-control" type="text" placeholder="Search a video"
                onChange={ (event) => delay(event.target.value) } />
        )
    }
}

SearchBar.propTypes = {
    setSearchKey: PropTypes.func,
    search: PropTypes.func
};

export default connect(null, { setSearchKey, search })(SearchBar);
