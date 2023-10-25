import { User } from "../../types/user";
import { UserAction } from "./actionType";
export type UserStateT = {
    user: User | null,
    loading?: boolean
}
const UserState:UserStateT = {user: null}

export const UserReducer = (state: UserStateT = UserState, action: UserAction):  UserStateT => {
    switch(action.type){
        case "REQUEST_LOGIN":
        return {...state, loading: true}
        case "RECEIVE_LOGIN":
            return {...state, loading: false}
        case "RECEIVE_USER":
        return {...state, user: action.user}
        default: return state
    }
}