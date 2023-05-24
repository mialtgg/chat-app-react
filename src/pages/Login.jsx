import React from "react";
import Add from "../img/addAvatar.png"

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Seyyarenginar Chat</span>

                <span className="tittle">Login</span>
            <form>
               
                <input type="email" placeholder="e-mail"/>
                <input type="password" placeholder="password"/>
            
                
                <button>Login</button>
            </form>
            <p>You don't have an account ?Register</p>
            </div>
        </div>

    )
}
export default Login;