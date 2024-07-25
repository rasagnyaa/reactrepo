import { applyMiddleware, legacy_createStore as createStore} from "redux";
//import { candiesReducers } from "./candies/reducer";
import { singleReducer } from "./combined-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from "redux-thunk";



export const reduxStore=createStore(singleReducer,composeWithDevTools(applyMiddleware(thunk)))