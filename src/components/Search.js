import React, { Component } from 'react';
import styled from 'styled-components';

class Search extends Component {

    state = {
        searchTerm: '',
        error: ''
    }

    searchPlayer = (e) => {
        e.preventDefault();
        if (this.state.searchTerm.split(' ').length === 2) {
            // redux action (first and last name)
            console.log('searching')
        } else {
            this.setState({ error: 'Search requires a first and last name.' })
        }

    }

    handleChange = (e) => {
        this.setState({ searchTerm: e })
    }



    render() {
        const { searchTerm, error } = this.state;
        return (
            <form onSubmit={searchPlayer}>
                <SearchBar type="text" value={searchTerm} onChange={this.handleChange} />
                {error && <span>{error}</span>}
            </form>
        )

    }
}

const SearchBar = styled.input`
    padding: 12px;
    border: 1px solid #f9f9f9;
`