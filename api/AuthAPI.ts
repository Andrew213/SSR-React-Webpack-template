import { User } from "../types/user";
import API from "./api";

export default class AuthAPI extends API {
  constructor() {
    super("/auth");
  }

  singin(data: {login: string, password: string | number}) {
    console.log(`data in sign in `, data)
    return this.http.post("/signin", JSON.stringify(data));
  }

  // singup(data: ISignUpData): Promise<any> {
  //   return this.http.post("/signup", JSON.stringify(data));
  // }

  logout() {
    return this.http.post("/logout");
  }

  getUser() {
    return this.http.get<User>("/user");
  }
}