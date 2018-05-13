import React from 'react';
import styled from 'styled-components';

export default function StatBox({ stat }) {

    const statsMap = {
        points_per_game: 'Points Per Game',
        assists_per_game: 'Assists',
        blocks_per_game: 'Blocks',
        three_point_percentage: 'Three Point Percentage',
        field_goal_percentage: 'Field Goal Percentage',
        rebounds_per_game: 'Rebounds'
    }

    const label = statsMap[stat.label];
    const value = stat.label.includes('percentage') ? `${stat.value}%` : stat.value;

    return (
        <Outer>
            <StatLabel>{label}</StatLabel>
            <StatValue>{value}</StatValue>
        </Outer>
    )
}

const Outer = styled.div`
    background-color: #F9F9FC;
    box-sizing: border-box;
`

const StatLabel = styled.span`
    display: block;
    font-weight: bold;
    letter-spacing: 1.5px;
    margin-top: 39px;
    margin-left: 25px;
`

const StatValue = styled.p`
    font-weight: bold;
    color: #1F6BEF;
    font-size: 50px;
    margin-top: 10px;
    margin-bottom: 27px;
    margin-left: 25px;
`
