import { ThunkDispatch } from "redux-thunk";
import { UserStateT } from "./reducer";
import { UserAction } from "./actionType";
import { RootState } from "../reducers";
import LoginApi from "../../api/AuthAPI";

const loginAPI = new LoginApi();

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
      console.log("GO")
    try{
      const user = await loginAPI.getUser();
      dispatch({ type: "RECEIVE_USER", user });
      console.log(`ALREADY IN SYSTEM`, user)
    }catch{
      await loginAPI.singin(data);
      const user = await loginAPI.getUser();

      dispatch({ type: "RECEIVE_USER", user });
      console.log(`WAS LOGIN`, user);

    }

     
    } catch (err) {
      console.log(err);
    }
  };
};
