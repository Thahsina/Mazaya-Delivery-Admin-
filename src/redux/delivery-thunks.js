import { userApi, productApi } from "./delivery-api";
import { setUsers, fetchProducts } from "./delivery-actions";

//import {AsyncStorage} from "react-native";
//import {CONTENT_DISABLED} from "../auth/auth-types";

export const getUsers = (userName, password) => async (dispatch, getState) => {
  //  const {workStatus} = getState().authReducer
  //const userName = await AsyncStorage.getItem('token')
  const res = await userApi.getUserToken({
    params: {
      userName,
      password,
    },
  });

  dispatch(setUsers(res.data.result));
};

export const getProducts = (userToken) => async (dispatch, getState) => {
  //  const {workStatus} = getState().authReducer
  //const userName = await AsyncStorage.getItem('token')
  const response = await productApi.getProducts({
    params:{
      userToken,
    }
  });

  dispatch(fetchProducts(response.data.result));
};
