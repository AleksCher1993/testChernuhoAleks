import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
    reducer:{

    }
})

export default store

export type RootState = ReturnType<typeof store.getState>; //Получаем типизацию store.getState
export type AppDispatch = typeof store.dispatch; //Получаем типизацию store.dispatch