import React from "react";
import Add from "../img/addAvatar.png"

const Register = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const displayname=e.target[0].value;
        const email=e.target[1].value;
        const password=e.target[2].value;
        const file=e.target[3].files[0];

    }
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo"> Chat-App</span>

                <span className="tittle">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="e-mail"/>
                <input type="password" placeholder="password"/>
                <input style={{display:"none"}} type ="file" id="file"/>
                <label htmlFor="file" id="file">
                    <img src={Add}></img>
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Do you have an account Login</p>
            </div>
        </div>

    )
}
export default Register;