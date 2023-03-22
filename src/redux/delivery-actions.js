import {
  SET_USERS,FETCH_PRODUCTS
} from "./delivery-types";

export const setUsers = (users) => ({type: SET_USERS, users})
export const fetchProducts = (products) => ({type: FETCH_PRODUCTS, products})

