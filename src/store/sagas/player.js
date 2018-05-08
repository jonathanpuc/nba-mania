import { put, call } from "redux-saga/effects";
import axios from "axios";

import {
    GET_PLAYER_SUCCESS,
    GET_PLAYER_FAIL
} from "../actions/actionTypes";

const statsURL = 'https://nba-players.herokuapp.com/players-stats/';
const imageURL = 'https://nba-players.herokuapp.com/players/';

function fetchPlayerData(firstName, surname) {
    let url = `${statsURL}${surname}/${firstName}`;

    return axios.get(
        url
    );
}


export function* retrievePlayer(action) {
    let { firstName, surname } = action.payload.name;
    try {
        let stats = yield call(fetchPlayerData, firstName, surname);
        let image = `${imageURL}${surname}/${firstName}`;

        let playerProfile = {
            ...stats.data,
            image
        }
        yield put({ type: GET_PLAYER_SUCCESS, payload: playerProfile });

    } catch (e) {
        yield put({ type: GET_PLAYER_FAIL, payload: e });
    }
}