import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getPlayer } from '../store/actions/player';

class Search extends Component {

    state = {
        searchTerm: '',
        error: ''
    }

    searchPlayer = (e) => {
        const playerName = this.state.searchTerm.split(' ');
        const firstName = playerName[0];
        const surname = playerName[1];
        e.preventDefault();
        if (firstName && surname) {
            // if both exist, pass the searchTerm to our action creator.
            this.props.getPlayer(firstName, surname);
        } else {
            // otherwise let the user know we'll need more than a first name.
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
                {error && <Error>{error}</Error>}
            </form>
        )
    }
}

export default connect(null, { getPlayer });

const SearchBar = styled.input`
    padding: 12px;
    border: 1px solid #f9f9f9;
`

const Error = styled.span`
color: red;
padding: 5px;
`