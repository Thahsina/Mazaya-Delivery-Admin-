import { userApi } from "./delivery-api";
import { setUsers } from "./delivery-actions";

//import {AsyncStorage} from "react-native";
//import {CONTENT_DISABLED} from "../auth/auth-types";

export const getUsers =(userName, password) => async (dispatch, getState) => {
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
