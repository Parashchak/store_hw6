import { cartReducer } from "../../redux/reducers/cart";
import { cartTypes } from "../../redux/types";

describe('cartReducer', () =>{
    test('handles ADD_TO_BASKET action correctly', async()=>{
        const initialState = {
            basket: [],
        };
        const action = {
            type: cartTypes.ADD_TO_BASKET,
            payload: ["012345"],
        }
        const newState = cartReducer(initialState, action);
        expect(newState.basket).toEqual(["012345"]);
    });

    test('handles DEL_FROM_BASKET action correctly', async()=>{
        const initialState = {
            basket: ["012345"],
        };
        const action = {
            type: cartTypes.DEL_FROM_BASKET,
            payload: [],
        }
        const newState = cartReducer(initialState, action);
        expect(newState.basket).toEqual([]);
    });

    test('handles CLEAR_BASKET action correctly', async()=>{
        const initialState = {
            basket: ["012345"],
        };
        const action = {
            type: cartTypes.CLEAR_BASKET,
            payload: [],
        }
        const newState = cartReducer(initialState, action);
        expect(newState.basket).toEqual([]);
    });
})