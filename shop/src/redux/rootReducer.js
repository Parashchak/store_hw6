// Core
import { combineReducers } from "redux";

// Reducers

import { productsReducer as products } from "./reducers/products";
import { favReducer as fav } from "./reducers/fav";
import { cartReducer as cart } from "./reducers/cart";
import { modalReducer as modal } from "./reducers/modal";

export const rootReducer = combineReducers({ products, modal, fav, cart });