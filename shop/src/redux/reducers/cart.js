import { cartTypes } from "../types";

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
    basket: IsJsonString("basket"),
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case cartTypes.ADD_TO_BASKET:
            return {
                ...state, basket: action.payload
            };
        case cartTypes.DEL_FROM_BASKET:
            return {
                ...state, basket: action.payload
            }
        case cartTypes.CLEAR_BASKET:
            return {
                ...state, basket: action.payload
            }
        default:
            return state;
    }
}