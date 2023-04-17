export type AuthHeaders = {
    Authorization: string
}

export type AuthState = {
    user?: User | null
    isLoading?: boolean
    isSuccess?: boolean
    isError?: boolean
    message?: string
}

export type CreateGoal = {
    text?: string
    userId?: string
}

export type Goal = {
    id?: string
    text?: string
    userId?: string
}

export type GoalState = {
    goals: Goal[]
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    message: string
}

export type SessionUser = {
    id: string
    name: string
    email: string
    token: string
}

export type UpdatedGoal = {
    id: string
    text: string
}

export type CreateUser = {
    name?: string
    email?: string
    password?: string
    phone?: string
}

export type User = {
    id?: string
    name?: string
    email?: string
    phone?: string
    password?: string
    token?: string
}

export type UserCredentials = {
    email: string
    password: string
}

export type ResponseGoal = {
    _id?: string
    text?: string
    userId?: string
}

