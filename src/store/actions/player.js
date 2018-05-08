import { GET_PLAYER } from './actionTypes';

export function getPlayer(name) {
    return {
        type: GET_PLAYER,
        payload: name
    }
}