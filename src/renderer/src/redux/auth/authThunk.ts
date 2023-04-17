import { createAsyncThunk } from "@reduxjs/toolkit"

import * as authService from "../../services/authService"
import { SessionUser, User, UserCredentials } from "../types"
import { getMessageFromErr } from "../utils"

export const signup = createAsyncThunk(
    "auth/signup",
    async (user: User, thunkApi: any): Promise<void> => {
        try {
            await authService.signup(user)
        } catch (err) {
            return thunkApi.rejectWithValue(getMessageFromErr(err))
        }
    }
)

export const signin = createAsyncThunk(
    "auth/signin",
    async (userCredentials: UserCredentials, thunkApi: any): Promise<SessionUser> => {
        try {
            return await authService.signin(userCredentials)
        } catch (err) {
            return thunkApi.rejectWithValue(getMessageFromErr(err))
        }
    }
)

export const signout = createAsyncThunk("auth/signout", (): void => {
    authService.signout()
})
