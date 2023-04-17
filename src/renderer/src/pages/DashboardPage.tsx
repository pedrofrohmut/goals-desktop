import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Spinner from "../components/Spinner"
import AddGoalForm from "../components/AddGoalForm"
import GoalList from "../components/GoalList"

import { setUser } from "../redux/auth/authSlice"
import { resetGoals } from "../redux/goals/goalSlice"
import { add, getAll, remove } from "../redux/goals/goalThunk"
import { useTypedDispatch, useTypedSelector } from "../redux/hooks"

const DashboardPage = () => {
    const navigate = useNavigate()

    const dispatch = useTypedDispatch()
    const { user } = useTypedSelector((state) => state.auth)
    const { goals, isLoading: isLoadingGoals } = useTypedSelector((state) => state.goal)

    // This variable only exists to make the UI not so flashy (loading ending too fast)
    const [isLoading, setIsLoading] = useState(false)

    const updateGoals = () => {
        setTimeout(() => {
            dispatch(getAll())
            setIsLoading(false)
        }, 380)
    }

    const handleAdd = (text: string) => {
        if (user) {
            setIsLoading(true)
            dispatch(add({ text, userId: user.id }))
            updateGoals()
        }
    }

    const handleDelete = (id: string) => {
        if (user) {
            setIsLoading(true)
            dispatch(remove(id))
            updateGoals()
        }
    }

    // Check for user in the localStorage
    useEffect(() => {
        if (!user) {
            const lsUser = localStorage.getItem("ls_user")
            if (!lsUser) {
                setTimeout(() => {
                    navigate("/signin")
                }, 500)
            } else {
                dispatch(setUser(JSON.parse(lsUser)))
            }
        }
    }, [user])

    // Load goals
    useEffect(() => {
        setIsLoading(false)
        dispatch(getAll())
        return () => {
            dispatch(resetGoals())
        }
    }, [])

    // Load nothing but the spinner in case of no user
    if (!user) return <Spinner />

    return (
        <>
            {(isLoading || isLoadingGoals) && <Spinner />}

            <div className="page-container">
                <section className="heading">
                    <h1 className="page-title">
                        <i className="fa-solid fa-calendar-days"></i>
                        Goals Dashboard
                    </h1>
                    <p>Welcome {user && user.name ? user.name : "username"}</p>
                </section>

                <AddGoalForm addGoal={handleAdd} />

                <GoalList goals={goals} removeGoal={handleDelete} />
            </div>
        </>
    )
}

export default DashboardPage
