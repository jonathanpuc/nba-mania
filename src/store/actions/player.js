import { GET_PLAYER } from './actionTypes';

export function getPlayer(firstName, surname) {
    return {
        type: GET_PLAYER,
        payload: { firstName, surname }
    }
}