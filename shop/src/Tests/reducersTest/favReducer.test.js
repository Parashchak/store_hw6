import { favReducer } from "../../redux/reducers/fav";
import { favTypes } from "../../redux/types";

describe('favReducer', () =>{
    test('handles add to fav action correctly', async()=>{
        const initialState = {
            fav: [],
        };
        const action = {
            type: favTypes.TOGGLE_FAV,
            payload: ["012345"],
        }
        const newState = favReducer(initialState, action);
        expect(newState.fav).toEqual(["012345"]);
    });

    test('handles del from fav action correctly', async()=>{
        const initialState = {
            fav: ["012345"],
        };
        const action = {
            type: favTypes.TOGGLE_FAV,
            payload: [],
        }
        const newState = favReducer(initialState, action);
        expect(newState.fav).toEqual([]);
    });
})