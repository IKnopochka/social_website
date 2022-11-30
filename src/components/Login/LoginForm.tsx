import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type LoginFormPropsType = {
    login: string,
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<LoginFormPropsType>) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div><Field name={'login'} placeholder={'Login'} component={'input'}/></div>
            <div><Field name={'password'} placeholder={'Password'} component={'input'}/></div>
            <div><Field name={'remember me'} component={'input'} type={'checkbox'}/>remember me</div>
            <div><button>Log in</button></div>

        </form>
    );
};

export default reduxForm<LoginFormPropsType>({
    form: 'Login'
})(LoginForm);