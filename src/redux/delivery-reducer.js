// import React from 'react';
import {
  SET_USERS
} from "./delivery-types";

const initialState = {
  users: []  ,
}
export const userReducer = (state = initialState, action) => {
 //function restaurntReducer  (state = initialState, action){
  
  switch (action.type) {
    case SET_USERS
    :{
      return {...state, users: action.users}
    } 
     default: return state   
    }
  }
  //export default restaurntReducer