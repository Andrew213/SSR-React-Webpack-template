// import {
//     configureStore,
//     createAsyncThunk,
//     createSelector,
//     createSlice,
//   } from '@reduxjs/toolkit'
// import AuthAPI from '../api/AuthAPI'
//   import { useDispatch } from 'react-redux'
// import { User } from '../types/user'
  
//   const api = new AuthAPI();
  
//   interface IUserService {
//     getCurrentUser(): Promise<User>
//   }
  
//   const loadMe = createAsyncThunk<User>(
//     'root/loadGreeting',
//     async (_, thunkApi) => {
//       const service: IUserService = thunkApi.extra as IUserService
//       return service.getCurrentUser()
//     }
//   )
  
//   const logout = createAsyncThunk('root/logout', async () => {
//     try {
//       return await api.logout()
//     } catch (e) {
//       return null
//     }
//   })
  
//   const authByData = createAsyncThunk<void, {login: string; password: string}>(
//     'root/authByCode',
//     async (data, { dispatch }) => {
//       await api.singin(data)
//       dispatch(loadMe())
//     }
//   )
  
//   interface UserSlice {
//     profile: User | null
//     isLoaded: boolean
//   }
  
//   export interface StoreState {
//     user: UserSlice
//   }
  
//   const selectUserSlice = (store: StoreState) => store.user
//   const selectIsAuthCompleted = createSelector(
//     selectUserSlice,
//     user => user.isLoaded
//   )
//   const selectIsAuthenticated = createSelector(
//     selectUserSlice,
//     selectIsAuthCompleted,
//     (user, authCompleted) => [
//       authCompleted,
//       authCompleted && user.profile !== null,
//     ]
//   )
  
//   function createStore(service: IUserService, initialState?: StoreState) {
//     const rootSlice = createSlice({
//       name: 'user',
//       initialState: {
//         profile: null,
//         isLoaded: false,
//       } as UserSlice,
//       reducers: {},
//       extraReducers: builder => {
//         builder.addCase(logout.fulfilled, store => {
//           store.isLoaded = true
//           store.profile = null
//         })
//         builder.addCase(loadMe.pending, store => {
//           store.isLoaded = false
//         })
//         builder.addCase(loadMe.rejected, store => {
//           store.isLoaded = true
//           store.profile = null
//         })
//         builder.addCase(loadMe.fulfilled, (store, action) => {
//           const { payload } = action
//           store.profile = payload
//           store.isLoaded = true
//         })
//       },
//     })
  
//     return configureStore({
//       reducer: {
//         user: rootSlice.reducer,
//       },
//       preloadedState: initialState,
//       middleware: getDefaultMiddleware => {
//         return getDefaultMiddleware({
//           thunk: {
//             extraArgument: service,
//           },
//         })
//       },
//     })
//   }
  
//   export type AppDispatch = ReturnType<typeof createStore>['dispatch']
//   export const useAppDispatch: () => AppDispatch = useDispatch
  
//   export {
//     createStore,
//     loadMe,
//     logout,
//     authByData,
//     selectUserSlice,
//     selectIsAuthenticated,
//     selectIsAuthCompleted,
//   }

import { applyMiddleware, legacy_createStore as createStore } from "redux"
import { User } from "../types/user"
import thunk from "redux-thunk"
import { RootState, reducers } from "./reducers"


export function initStore(initialState?: RootState ){
  return createStore(reducers, initialState, applyMiddleware(thunk))
}