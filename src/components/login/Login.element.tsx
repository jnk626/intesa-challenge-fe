import { NavLink } from "react-router-dom"

export default function Login() {
    
    return(
        <>
        <form method="post">
            <input type="text" name="username" />
            <input type="text" name="password" />
            <NavLink to="/profile">
                <button>Login</button>
            </NavLink>
        </form>
        </>
    )
}