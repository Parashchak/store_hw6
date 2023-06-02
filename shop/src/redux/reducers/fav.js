import { favTypes } from "../types";

function IsJsonString(str) {
    const localData = localStorage.getItem(str);
    if (!localData) return [];
    try {
        const data = JSON.parse(localData);
        return data;
    } catch (e) {
        return [];
    }
}

const initialState = {
    fav: IsJsonString("fav"),
}

export function favReducer(state = initialState, action) {
    switch (action.type) {
        case favTypes.TOGGLE_FAV:
            return {
                ...state, fav: action.payload
            };
        default:
            return state;
    }
}