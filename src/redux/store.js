import {applyMiddleware, combineReducers,compose, createStore} from "redux";

import thunk from "redux-thunk";
import {userReducer} from "./delivery-reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducers = combineReducers({
  userReducer
})


let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
export default store
