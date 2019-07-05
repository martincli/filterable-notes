import React, { Component } from 'react';
import Cell from './Cell';

class Table extends Component {
    constructor(props) {
        super(props);
        this.handleHeaderClick = this.handleHeaderClick.bind(this);
    }

    handleHeaderClick(ev) {
        this.props.onHeaderClick(ev.target.innerText.toLowerCase());
    }

    render() {
        let entries = this.props.entries;

        // sort
        if (this.props.sortHeader) {
            entries = this.props.entries.sort((a,b) => {
                // use number value if possible, alphabetical otherwise (does not work properly when mixed)
                a = parseFloat(a['gsx$'+this.props.sortHeader]['$t']) || a['gsx$'+this.props.sortHeader]['$t'].toLowerCase();
                b = parseFloat(b['gsx$'+this.props.sortHeader]['$t']) || b['gsx$'+this.props.sortHeader]['$t'].toLowerCase();

                if (a <= b) {
                    return this.props.sortReverse ? 1 : -1;
                } else {
                    return this.props.sortReverse ? -1 : 1;
                }
            });
        }

        // filter
        entries = entries.filter(entry => {
            const cells = [];
            for (const header of this.props.headers) {
                cells.push(entry['gsx$'+header]['$t']);
            }
            for (const cell of cells) {
                if (cell.toLowerCase().includes(this.props.searchTerm.toLowerCase())) {
                    return true;
                }
            }
            return false;
        });

        return (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    {this.props.headers.map((header,index) => <td key={index} onClick={this.handleHeaderClick}>{header.toUpperCase()}</td>)}
                  </tr>
                </thead>
                <tbody>
                  {entries.map((entry,index) => {
                    const cells = [];
                    for (const header of this.props.headers) {
                      cells.push(entry['gsx$'+header]['$t']);
                    }
                    return (
                      <tr key={index}>
                        {cells.map((value,index) => <Cell key={index} value={value} searchInput={this.props.searchTerm}/>)}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
        );
    }
}

export default Table;
