import {
    GET_PLAYER,
    GET_PLAYER_SUCCESS,
    GET_PLAYER_FAIL
} from "../actions/actionTypes";

const initialState = {
    player: {},
    _loading: false,
    error: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PLAYER:
            return {
                ...state,
                _loading: true
            };
        case GET_PLAYER_SUCCESS:
            return {
                ...state,
                player: { ...action.payload },
                _loading: false
            };
        case GET_PLAYER_FAIL:
            return {
                ...state,
                _loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}