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
        this.setState({ searchTerm: e.target.value })
    }

    render() {
        const { searchTerm, error } = this.state;
        return (
            <form onSubmit={this.searchPlayer}>
                <SearchWrapper>
                    <SearchBar type="text" value={searchTerm} onChange={this.handleChange} />
                    <SearchButton type="submit">🔍</SearchButton>
                </SearchWrapper>
                {error && <Error>{error}</Error>}
            </form>
        )
    }
}

export default connect(null, { getPlayer })(Search);

const SearchWrapper = styled.div`
    display: flex;
    flex-direction:row;
    width: 80%;
    margin: 0 auto;
`

const SearchBar = styled.input`
    padding: 14px 20px;
    border: 1px solid #f9f9f9;
    color: #8D96AA;
    font-size: 18px;
    width: 250px;
    border-radius: 6px 0px 0px 6px;
    flex:7;
`

const SearchButton = styled.button`
    background-color: #2F5EE5;
    padding: 14px 20px;
    border:none;
    border-radius: 0px 6px 6px 0px;
    cursor: pointer;
    flex:1;
`


const Error = styled.span`
    color: red;
    padding: 5px;
    display:block;
    font-size:12px;
`