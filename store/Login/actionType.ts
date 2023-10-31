import { User } from "../../types/user";

export interface requestLoginI {
  type: "REQUEST_LOGIN";
}

export interface requestOauthI {
  type: "REQUEST_LOGIN";
}

export interface receiveLoginI {
  type: "RECEIVE_LOGIN";
}

export interface receiveUserI {
  type: "RECEIVE_USER";
  user: User;
}

export type UserAction =
  | requestLoginI
  | receiveLoginI
  | receiveUserI
  | requestOauthI;
