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

`

const StatLabel = styled.span`
    font-weight: bold;
    letter-spacing: 1.5px;
`

const StatValue = styled.p`
    font-weight: bold;
    color: #006BB6;
    font-size: 30px;
`
