// import React from 'react';
import { FETCH_PRODUCTS, SET_USERS } from "./delivery-types";

const initialState = {
  users: [],
  products: [],
};
export const userReducer = (state = initialState, action) => {
  //function restaurntReducer  (state = initialState, action){

  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case FETCH_PRODUCTS: {
      return { ...state, products: action.products };
    }
    default:
      return state;
  }
};
//export default restaurntReducer
