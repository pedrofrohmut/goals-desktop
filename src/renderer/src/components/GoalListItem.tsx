import { Goal } from "../redux/types"

type GoalListItemProps = {
    goal: Goal
    removeGoal: (id: string) => void
}

const GoalListItem = ({ goal, removeGoal }: GoalListItemProps) => (
    <div className="goal" key={goal.id}>
        <div className="content">{goal.text}</div>
        <button
            className="btn"
            onClick={() => {
                if (goal && goal.id) {
                    removeGoal(goal.id)
                }
            }}
        >
            <i className="fa-solid fa-trash-can"></i>
            Delete
        </button>
    </div>
)

export default GoalListItem

