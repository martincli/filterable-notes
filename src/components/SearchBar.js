import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(ev) {
        this.props.onInputChange(ev.target.value);
    }

    render() {
        return (
            <div>
              <input 
                type="text"
                className="search"
                autoFocus
                placeholder="Search..."
                onChange={this.handleInputChange}
              />
            </div>
        );
    }
}

export default SearchBar;
