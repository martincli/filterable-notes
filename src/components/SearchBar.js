import React from 'react';

const SearchBar = (props) => {
    return (
        <input 
            type="text"
            className="search"
            autoFocus
            placeholder="Search..."
            value={props.searchTerm}
            onChange={(ev) => props.onInputChange(ev.target.value)}
        />
    );
}

export default SearchBar;
