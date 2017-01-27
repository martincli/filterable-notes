import React, { Component } from 'react';
import Linkify from 'react-linkify';

class Cell extends Component {
    render() {
        const hasUrl = this.props.value.includes('http://') || this.props.value.includes('https://');

        // don't highlight matches for urls and 1-2 character search inputs
        if(!hasUrl) {
            if(this.props.searchInput.length >= 2) {
                const regex = new RegExp(this.props.searchInput, 'gi');
                const nonMatches = this.props.value.split(regex);
                let matches = this.props.value.match(regex);
                const output = [];

                if(matches) {
                    matches = matches.map((val,index) => <span key={index} className="hl">{val}</span>);
                }

                // build strings with highlighted matches
                while(nonMatches.length) {
                    output.push(nonMatches.shift());
                    if(matches) {
                        output.push(matches.shift());
                    }
                }

                return (
                    <td>{output}</td>
                );
            }
            return (
                <td>{this.props.value}</td>
            );
        }
        return (
            <td><Linkify properties={{target: '_blank'}}>{this.props.value}</Linkify></td>
        );
    }
}

export default Cell;

