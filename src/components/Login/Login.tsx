import React from 'react';
import LoginForm, {LoginFormProps} from "./LoginForm";
import {connect} from "react-redux";
import {DataStateType, loginTC} from "../../state/authReducer";
import {Navigate} from "react-router-dom";
import {RootReducerType} from "../../state/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
}
type LoginProps = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
} & mapStateToPropsType

const Login = (props: LoginProps) => {
    const Submit = ({email, password, rememberMe}: LoginFormProps) => {
        console.log(email, password, rememberMe)
        props.loginTC(email, password, rememberMe)
    }

    if (props.isAuth) return <Navigate to='/profile'/>
    return (
        <div>
            <div><h1>Login</h1></div>
            <LoginForm onSubmit={Submit}/>

        </div>

    );
};

const mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginTC})(Login)