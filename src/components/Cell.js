import React from 'react';
import Linkify from 'react-linkify';

const Cell = (props) => {
    const hasUrl = props.value.includes('http://') || props.value.includes('https://');

    // don't highlight matches for urls and 1-2 character search inputs
    if (!hasUrl) {
        if (props.searchInput.length >= 2) {
            const regex = new RegExp(props.searchInput, 'gi');
            const nonMatches = props.value.split(regex);
            let matches = props.value.match(regex);
            const output = [];

            if (matches) {
                matches = matches.map((val,index) => <span key={index} className="highlight">{val}</span>);
            }

            // build strings with highlighted matches
            while (nonMatches.length) {
                output.push(nonMatches.shift());
                if (matches && matches.length > 0) {
                    output.push(matches.shift());
                }
            }

            return <td>{output}</td>;
        }
        return <td>{props.value}</td>;
    }
    return <td><Linkify properties={{target: '_blank'}}>{props.value}</Linkify></td>;
}

export default Cell;
