import { Action, Dispatch, combineReducers } from "redux"
import { UserReducer, UserStateT } from "./Login/reducer"
import { ThunkDispatch } from "redux-thunk"

export type RootState = {
    Login: UserStateT
}

export const reducers = combineReducers({
    Login: UserReducer
})

export type RootStore = ReturnType<typeof reducers>;

export type DispatchType = Dispatch<Action> & ThunkDispatch<RootStore, any, Action>;