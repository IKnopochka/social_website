import React from 'react';
import LoginForm, {LoginFormPropsType} from "./LoginForm";

const Login = () => {
    const Submit = (formData: LoginFormPropsType) => {
        console.log(formData)
    }
    return (
        <div>
            <div><h1>Login</h1></div>
            <div><LoginForm onSubmit={Submit}/></div>

        </div>

    );
};

export default Login