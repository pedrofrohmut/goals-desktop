import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Spinner from "../components/Spinner"

import { signin } from "../redux/auth/authThunk"
import { useTypedDispatch, useTypedSelector } from "../redux/hooks"

const SignInPage = () => {
    const navigate = useNavigate()
    const dispatch = useTypedDispatch()
    const { user, isSuccess } = useTypedSelector(state => state.auth)

    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const resetState = () => {
        setEmail("")
        setPassword("")
        setTimeout(() => {
            setIsLoading(false)
            setIsSubmitted(false)
        }, 2000)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setIsSubmitted(true)

        dispatch(signin({ email, password }))
        resetState()
    }

    useEffect(() => {
        if (isSuccess || user) {
            navigate("/")
        }
    }, [isSuccess, user])

    return (
        <div className="page-container">
            <section className="heading">
                <h1 className="page-title">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    Sign In
                </h1>
                <p>Inform your credentials to access the dashboard</p>
            </section>

            {isLoading && <Spinner />}

            {!isLoading && (
                <section className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="label-block">E-mail</label>
                            <input
                                type="email"
                                className="form-text"
                                placeholder="E-mail address registered"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="label-block">Password</label>
                            <input
                                type="password"
                                className="form-text"
                                placeholder="The password for this e-mail"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn" type="submit" disabled={isSubmitted}>
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            )}
        </div>
    )
}

export default SignInPage
