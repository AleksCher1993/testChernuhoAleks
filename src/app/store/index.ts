import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../api";
import { userReducer } from "../../entities/user";



const store = configureStore({
    reducer:{
        [usersApi.reducerPath]: usersApi.reducer,
        userInfo:userReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>; //Получаем типизацию store.getState
export type AppDispatch = typeof store.dispatch; //Получаем типизацию store.dispatch