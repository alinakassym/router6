import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/';

    const {signIn} = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username?.value;

        signIn(user, () => navigate(fromPage, {replace: true}));
    }

    return (
        <div>
            <h1>Login page</h1>
            <form style={{marginLeft: "auto", marginRight: "auto", width: "300px", display:"flex", flexDirection: "column"}} onSubmit={handleSubmit}>
                <label>
                    Name: <input style={{width: "100%"}} type="text" name="username" />
                </label>
                <button style={{marginRight: 0}} type="submit">Login</button>
            </form>
        </div>
    )
}

export {LoginPage}