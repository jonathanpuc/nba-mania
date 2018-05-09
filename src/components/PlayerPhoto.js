import React from 'react';

export default function PlayerPhoto({ url, name }) {
    return (
        <img src={url} alt={name} />
    )
}