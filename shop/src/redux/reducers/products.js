import {productTypes} from "../types";

const initialState = {
    isLoading: false,
    products: [],
    hasError: null,
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case productTypes.GET_PRODUCTS:
            return {
                ...state, products: action.payload
            };
        case productTypes.SET_LOADING:
            return {
                ...state, isLoading: action.payload
            };
        case productTypes.HAS_ERR:
            return {
                ...state, hasError: action.payload
        };
        default:
            return state;
    }
}