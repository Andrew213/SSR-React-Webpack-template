import { ThunkDispatch } from "redux-thunk";
import { UserStateT } from "./reducer";
import { UserAction } from "./actionType";
import { RootState } from "../reducers";
import {OauthAPI} from "../../api/AuthAPI"

const oauthAPI = new OauthAPI();

export type loginT = {
  login: string;
  password: string | number;
};

export const getLogin = (data: loginT) => {
  return async (
    dispatch: ThunkDispatch<UserStateT, void, UserAction>,
    getState: () => RootState
  ) => {
    try {
  
      // const user = await loginAPI.getUser();
      // dispatch({ type: "RECEIVE_USER", user });
      // console.log(`ALREADY IN SYSTEM`, user)

      // await loginAPI.singin(data);
      // const user = await loginAPI.getUser();

      // dispatch({ type: "RECEIVE_USER", user });
      // console.log(`WAS LOGIN`, user);

 

     
    } catch (err) {
      console.log(err);
    }
  };
};


export const oauthLogin = (code: string) => {
  return async (
    dispatch: ThunkDispatch<UserStateT, void, UserAction>,
    getState: () => RootState
  ) => {
    // const {service_id} = await oauthAPI.getServiceId();

    // if(service_id){
    //   const jopa = await oauthAPI.OAuth(code);

    //   console.log(`jopa `, jopa)
    // }
    // window.location.replace(getYandexUrl(clientId))


    
    // const getServiceId 
  }
}
