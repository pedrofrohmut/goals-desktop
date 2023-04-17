import axios from "axios"

import { AuthHeaders, CreateGoal, Goal } from "../redux/types"

const GOALS_API_URL = "http://localhost:5000/api/goals"

const getTokenFromLocalStorage = (): string => {
    const user = localStorage.getItem("ls_user")
    if (user == null) {
        throw new Error("Not authenticated")
    }
    return JSON.parse(user).token
}

const getHeaders = (token: string): AuthHeaders => ({ Authorization: `Bearer ${token}` })

export const add = async (goal: CreateGoal): Promise<void> => {
    const token = getTokenFromLocalStorage()
    const headers = getHeaders(token)
    await axios.post(GOALS_API_URL, goal, { headers })
}

export const getAll = async (): Promise<Goal[]> => {
    const token = getTokenFromLocalStorage()
    const headers = getHeaders(token)
    return (await axios.get(GOALS_API_URL, { headers })).data
}

export const remove = async (goalId: string): Promise<void> => {
    const token = getTokenFromLocalStorage()
    const headers = getHeaders(token)
    await axios.delete(`${GOALS_API_URL}/${goalId}`, { headers })
}
