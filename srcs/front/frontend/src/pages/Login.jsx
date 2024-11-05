import Form from "../components/Form"
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Login() {
    const navigate = useNavigate();

    const handleGoToRegisterButton = () => {
        localStorage.clear();
        navigate("/register")
    }

    return (
        <div>
            {localStorage.clear()}
            <button className="go-to-register-button" onClick={() => handleGoToRegisterButton()}>Register</button>
            <Form route="/api/user/token/" method="login"/>
        </div>
    );
}

export default Login