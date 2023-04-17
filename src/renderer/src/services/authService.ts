import axios from "axios"

import { CreateUser, SessionUser, UserCredentials } from "../redux/types"

const AUTH_API_URL = "http://localhost:5000/api/users"

export const signup = async (user: CreateUser): Promise<void> => {
    await axios.post(AUTH_API_URL, user)
}

export const signin = async (credentials: UserCredentials): Promise<SessionUser> => {
    const response = await axios.post(`${AUTH_API_URL}/signin`, credentials)
    if (response.data) {
        localStorage.setItem("ls_user", JSON.stringify(response.data))
    }
    return response.data
}

export const signout = (): void => {
    localStorage.removeItem("ls_user")
}
