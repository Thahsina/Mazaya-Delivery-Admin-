import {applyMiddleware, combineReducers, createStore} from "redux";

import thunk from "redux-thunk";
import {userReducer} from "./delivery-reducer";


let reducers = combineReducers({
  userReducer
})


let store = createStore(reducers, applyMiddleware(thunk))
export default store
