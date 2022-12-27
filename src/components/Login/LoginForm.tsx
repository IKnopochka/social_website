import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {inputField} from "../../assets/ValidationForm/RenderValidationField";
import {email, maxLength200, minLength2, required} from "../../assets/ValidationForm/validators";

export type LoginFormProps = {
    email: string,
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<LoginFormProps>) => {
    const {handleSubmit, error} = props

    return (
        <form onSubmit={handleSubmit}>
            <Field
                name={'email'}
                component={inputField}
                label={'Email'}
                type='text'
                validate={[required, maxLength200, minLength2]}
                warn={email}
            />
            <Field
                name={'password'}
                label={'Password'}
                component={inputField}
                type='password'
                validate={[required]}
            />
            <div><Field name={'remember me'} component={'input'} type={'checkbox'}/>remember me</div>
            <div>{error}</div>
            <div><button>Log in</button></div>

        </form>
    );
};

export default reduxForm<LoginFormProps>({
    form: 'Login'
})(LoginForm);