import { REDIRECT_URI } from "../constatns";
import { User } from "../types/user";
import API from "./api";

export  class AuthAPI extends API {
  constructor() {
    super("/auth");
  }

  singin(data: {login: string, password: string | number}) {
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


export  class OauthAPI extends API{
  constructor() {
    super("/oauth");
  }


  getServiceId() {
    return this.http.get<{service_id: string}>("/yandex/service-id")
  }

  OAuth(code:string){
    return this.http.post("/yandex", JSON.stringify({code, redirect_uri: REDIRECT_URI}))
  }
}