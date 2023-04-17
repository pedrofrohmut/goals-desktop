import { useState } from "react"

import Spinner from "../components/Spinner"
import AddGoalForm from "../components/AddGoalForm"
import GoalList from "../components/GoalList"

// TEMP:
const isLoadingGoals = false
const goals = [
    { id: 1, text: "Goal 1" },
    { id: 2, text: "Goal 2" },
    { id: 3, text: "Goal 3" },
]
const user = {
    email: "john@doe.com",
    name: "John Doe"
}

const DashboardPage = () => {
    const [isLoading, setIsLoading] = useState(false)

    const handleAdd = () => {}

    const handleDelete = () => {}

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
