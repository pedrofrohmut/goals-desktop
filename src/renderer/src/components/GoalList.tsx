import "../assets/goal-list.css"

import { Goal } from "../redux/types"

import GoalListItem from "./GoalListItem"

type GoalListProps = {
    goals: Goal[]
    removeGoal: (goalId: string) => void
}

const GoalList = ({ goals, removeGoal }: GoalListProps) => (
    <div className="goals">
        <div className="goals-title">Goals</div>

        {goals && goals.length > 0 && (
            <>
                {goals.map((goal: Goal) => (
                    <GoalListItem goal={goal} removeGoal={removeGoal} />
                ))}
            </>
        )}

        {(!goals || goals.length == 0) && <div className="goals-title">No goals to display</div>}
    </div>
)

export default GoalList

