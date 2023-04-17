import { createAsyncThunk } from "@reduxjs/toolkit"

import * as goalService from "../../services/goalService"
import { Goal } from "../types"
import { getMessageFromErr } from "../utils"

export const getAll = createAsyncThunk("goal/getAll", async (_, thunkApi: any): Promise<Goal[]> => {
    try {
        return await goalService.getAll()
    } catch (err) {
        return thunkApi.rejectWithValue(getMessageFromErr(err))
    }
})

export const add = createAsyncThunk(
    "goal/add",
    async (goal: Goal, thunkApi: any): Promise<void> => {
        try {
            await goalService.add(goal)
        } catch (err) {
            return thunkApi.rejectWithValue(getMessageFromErr(err))
        }
    }
)

export const remove = createAsyncThunk(
    "goal/remove",
    async (goalId: string, thunkApi: any): Promise<void> => {
        try {
            await goalService.remove(goalId)
        } catch (err) {
            return thunkApi.rejectWithValue(getMessageFromErr(err))
        }
    }
)
