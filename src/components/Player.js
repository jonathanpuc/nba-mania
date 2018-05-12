import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import PlayerPhoto from './PlayerPhoto';
import StatBox from './StatBox';
import styled from 'styled-components';


class Player extends Component {
    render() {
        const { name, image, stats } = this.props.player;

        const statBoxList = stats && stats.map(stat => <StatBox stat={stat} key={stat.label} />);

        return (
            <Outer>
                <Search />
                {image && <PlayerPhoto url={image} name={name} />}
                <StatsWrapper>
                    {statBoxList}
                </StatsWrapper>
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

const StatsWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 15px;
div {
    width: 50%;
}
`