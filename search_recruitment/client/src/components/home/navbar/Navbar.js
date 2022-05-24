import "./navbar.scss"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navContainer">
                    <span className="logo">✩ TÌM VIỆC NHANH ✩</span>
                    <div className="navItems">
                        <Link to="/register">
                            <button className="navButton">Register</button>
                        </Link>
                        <Link to="/login">
                            <button className="navButton">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar