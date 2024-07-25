import { combineReducers } from "redux";
import { candiesReducers } from "./candies/reducer";
// import {combineReducers} from "redux";
import { productReducer } from "./products/reducer";
import { cartReducer } from "./cart/reducer";



export const singleReducer=combineReducers({
    candies:candiesReducers,
    products:productReducer,
    cart:cartReducer
})
