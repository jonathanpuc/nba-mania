import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlayerPhoto from './PlayerPhoto';
import StatBox from './StatBox';
import styled from 'styled-components';


class Player extends Component {
    render() {
        const { name, image, stats } = this.props.player;

        const statBoxList = stats && stats.map(stat => <StatBox stat={stat} key={stat.label} />);

        return (
            <Outer>
                <ImageWrapper>
                    {image && <PlayerPhoto url={image} name={name} />}
                </ImageWrapper>
                <StatsWrapper>
                    {statBoxList}
                </StatsWrapper>
            </Outer>
        )
    }

}


export default connect(state => ({ player: state.player.player }))(Player);

const Outer = styled.div`
    border: 1px solid black;
    width: 500px;
    max-width: 85%;
    margin: 0 auto;
`

const ImageWrapper = styled.div`
    text-align:center;
    img {
        vertical-align: middle;
    }
`

const StatsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    div {
        width: 50%;
        border-bottom: 1px dashed #C9C9CB;
    }

    div:first-child, div:nth-child(3),div:nth-child(5)  {
        border-right: 1px dashed #C9C9CB;
    }
`