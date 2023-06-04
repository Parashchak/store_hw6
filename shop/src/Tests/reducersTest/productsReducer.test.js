import { productsReducer } from "../../redux/reducers/products";
import { productTypes } from "../../redux/types";

describe('productsReducer', () =>{
    test('handles GET_PRODUCTS action correctly', async()=>{
        const initialState = {
            isLoading: false,
            products: [],
            hasError: null,
        };
        const action = {
            type: productTypes.GET_PRODUCTS,
            payload: [{
                barcode: "012345",
                color: "Midnight",
                id: "0",
                name: "iphone 14",
                price: "900",
            }],
        }
        const newState = productsReducer(initialState, action);
        expect(newState.isLoading).toEqual(false);
        expect(newState.products).toEqual([{barcode: "012345", color: "Midnight", id: "0", name: "iphone 14", price: "900",}]);
        expect(newState.hasError).toEqual(null);
    });

    test('handles DEL_MODAL action correctly', async()=>{
        const initialState = {
            isLoading: false,
            products: [],
            hasError: null,
        };
        const action = {
            type: productTypes.SET_LOADING,
            payload: true,
        }
        const newState = productsReducer(initialState, action);
        expect(newState.isLoading).toEqual(true);
        expect(newState.products).toEqual([]);
        expect(newState.hasError).toEqual(null);
    });

    test('handles CLOSE_MODAL action correctly', async()=>{
        const initialState = {
            isLoading: false,
            products: [],
            hasError: null,
        };
        const action = {
            type: productTypes.HAS_ERR,
            payload: "ERROR",
        }
        const newState = productsReducer(initialState, action);
        expect(newState.isLoading).toEqual(false);
        expect(newState.products).toEqual([]);
        expect(newState.hasError).toEqual("ERROR");
    });
})