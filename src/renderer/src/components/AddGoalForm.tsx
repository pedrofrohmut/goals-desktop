import { useState } from "react"

type Props = {
    addGoal: (content: string) => void
}

const AddGoalForm = ({ addGoal }: Props) => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [content, setContent] = useState("")

    const resetState = () => {
        setContent("")
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2000)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)

        addGoal(content)

        resetState()
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-inline-group">
                    <input
                        className="form-text"
                        type="text"
                        placeholder="What is your goal?"
                        required
                        min="3"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                    <button className="btn" type="submit" disabled={isSubmitted}>
                        <i className="fa-solid fa-paper-plane"></i>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    )
}

export default AddGoalForm

