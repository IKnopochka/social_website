import React from 'react';
import LoginForm, {LoginFormProps} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../state/authReducer";
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "../../state/redux-store";
import {PATH} from "common/routes/AppRoutes";

type mapStateToPropsType = {
    isAuth: boolean
}
type LoginProps = {
    login: (email: string, password: string, rememberMe: boolean) => void
} & mapStateToPropsType

const Login = (props: LoginProps) => {
    const Submit = ({email, password, rememberMe}: LoginFormProps) => {
        props.login(email, password, rememberMe)
    }

    if (props.isAuth) return <Navigate to={PATH.PROFILE}/>
    return (
        <div>
            <div><h1>Login</h1></div>
            <LoginForm onSubmit={Submit}/>

        </div>

    );
};

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)