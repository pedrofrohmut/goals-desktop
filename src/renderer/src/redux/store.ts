import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./auth/authSlice"
import goalsReducer from "./goals/goalSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        goal: goalsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
