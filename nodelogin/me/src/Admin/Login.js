import React, { Component } from "react";
import "./App.css";
class Login extends Component {

    render() {
        return (
            <div class="login-form">
                <h1>Login Form</h1>
                <form action="auth" method="POST">
                    <input type="text" name="username" placeholder="Username" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <input type="submit" value="login" />
                </form>
            </div>


        )
    }




}



export default Login;