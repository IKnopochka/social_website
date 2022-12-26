import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {inputField} from "../../assets/ValidationForm/RenderValidationField";
import {alphaNumeric, maxLength20, minLength2, required} from "../../assets/ValidationForm/validators";

export type LoginFormPropsType = {
    login: string,
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<LoginFormPropsType>) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name={'login'}
                component={inputField}
                label={'Login'}
                type='text'
                validate={[required, maxLength20, minLength2]}
                warn={alphaNumeric}
            />
            <Field
                name={'password'}
                label={'Password'}
                component={inputField}
                type='password'
                validate={[required]}
            />
            <div><Field name={'remember me'} component={'input'} type={'checkbox'}/>remember me</div>
            <div><button>Log in</button></div>

        </form>
    );
};

export default reduxForm<LoginFormPropsType>({
    form: 'Login'
})(LoginForm);