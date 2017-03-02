import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Table from './components/Table';

class App extends Component {
    constructor() {
        super();
        this.state = {
            headers: [],
            entries: [],
            sortHeader: '',
            sortReverse: false,
            searchInput: '',
            loading: true,
            error: false
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onHeaderClick = this.onHeaderClick.bind(this);
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);

        fetch(`https://spreadsheets.google.com/feeds/list/${urlParams.get('id')}/od6/public/values?alt=json`)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response");
                }
                return response.json();
            })
            .then(data => { 
                const headers = [];
                for(const prop in data.feed.entry[0]) {
                    if(prop.includes('gsx$')) {
                        headers.push(prop.slice(4));
                    }
                }
                
                this.setState({ 
                    headers,
                    entries: data.feed.entry,
                    sortHeader: headers[0],
                    loading: false
                });
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: true
                });
            }
        );
    }

    onInputChange(value) {
        this.setState({searchInput: value});
    }

    onHeaderClick(clickedHeader) {
        if(this.state.sortHeader === clickedHeader) {
            this.setState({sortReverse: !this.state.sortReverse});
        }
        else {
            this.setState({
                sortHeader: clickedHeader,
                sortReverse: false
            });
        }
    }

    render() {
        if(this.state.loading) {
            return (
                <div className="loading">
                  <div className="spinner">
                    <div></div>
                  </div>
                </div>
            );
        }
        else if(this.state.error) {
            return (
                <div className="error">
                  <div>
                    <div className="error-header">Error: Invalid data</div>
                    <div className="error-text">Please ensure that the spreadsheet ID is correct and that the spreadsheet is published.</div>
                  </div>
                </div>
            );
        }
        else {
            return (
                <div>
                  <SearchBar 
                    onInputChange={this.onInputChange}
                  />
                  <Table 
                    headers={this.state.headers}
                    entries={this.state.entries}
                    sortHeader={this.state.sortHeader}
                    sortReverse={this.state.sortReverse}
                    searchInput={this.state.searchInput}
                    onHeaderClick={this.onHeaderClick}
                  />
                </div>
            );
        }
    }
}

export default App;
