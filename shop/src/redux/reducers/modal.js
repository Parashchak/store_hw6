import { modalTypes } from "../types";

const initialState = {
    isActive: false,
    typeOfModal: "",
    productId: null,
}

export function modalReducer( state = initialState, action ) {
    switch (action.type) {
        case modalTypes.ADD_MODAL:
            return {
                isActive: true,
                typeOfModal: action.type,
                productId: action.payload,
            };
        case modalTypes.DEL_MODAL:
            return {
                isActive: true,
                typeOfModal: action.type,
                productId: action.payload,
            };
        case modalTypes.CLOSE_MODAL:
            return {
                isActive: false,
                typeOfModal: "",
                productId: null,
            };
        default:
            return state;
    }
}