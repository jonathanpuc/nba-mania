import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import PlayerPhoto from './PlayerPhoto';
import styled from 'styled-components';


class Player extends Component {
    render() {
        const { name, image } = this.props.player;
        return (
            <Outer>
                <Search />
                {image && <PlayerPhoto url={image} name={name} />}
            </Outer>
        )
    }

}


export default connect(state => ({ player: state.player.player }))(Player);

const Outer = styled.div`
  background-color: #F3F7FD;
    width: 500px;
    max-width: 85%;
    margin: 0 auto;

`