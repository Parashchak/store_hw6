import { modalReducer } from "../../redux/reducers/modal";
import { modalTypes } from "../../redux/types";

describe('modalReducer', () =>{
    test('handles ADD_MODAL action correctly', async()=>{
        const initialState = {
            isActive: false,
            typeOfModal: "",
            productId: null,
        };
        const action = {
            type: modalTypes.ADD_MODAL,
            payload: "012345",
        }
        const newState = modalReducer(initialState, action);
        expect(newState.isActive).toEqual(true);
        expect(newState.typeOfModal).toEqual("ADD_MODAL");
        expect(newState.productId).toEqual("012345");
    });

    test('handles DEL_MODAL action correctly', async()=>{
        const initialState = {
            isActive: false,
            typeOfModal: "",
            productId: null,
        };
        const action = {
            type: modalTypes.DEL_MODAL,
            payload: "012345",
        }
        const newState = modalReducer(initialState, action);
        expect(newState.isActive).toEqual(true);
        expect(newState.typeOfModal).toEqual("DEL_MODAL");
        expect(newState.productId).toEqual("012345");
    });

    test('handles CLOSE_MODAL action correctly', async()=>{
        const initialState = {
            isActive: true,
            typeOfModal: "ADD_MODAL",
            productId: "012345",
        };
        const action = {
            type: modalTypes.CLOSE_MODAL,
            payload: {
                isActive: false,
                typeOfModal: "",
                productId: null,
            },
        }
        const newState = modalReducer(initialState, action);
        expect(newState.isActive).toEqual(false);
        expect(newState.typeOfModal).toEqual("");
        expect(newState.productId).toEqual(null);
    });
})