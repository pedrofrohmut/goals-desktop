import { Link } from "react-router-dom"

import "../assets/navbar.css"

const Navbar = () => {
    const handleSignOut = () => {
        console.log("Sign Out")
    }

    return (
        <header>
            <nav>
                <Link className="nav-link" to={"/"}>
                    DashBoard
                </Link>
                <a className="nav-link" onClick={handleSignOut}>
                    Sign Out
                </a>
                <Link className="nav-link" to={"/signin"}>
                    Sign In
                </Link>
                <Link className="nav-link" to={"/signup"}>
                    Sign Up
                </Link>
            </nav>
        </header>
    )
}

export default Navbar
