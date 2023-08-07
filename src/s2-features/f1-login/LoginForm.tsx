import React from 'react';
import {email} from "s1-main/m1-ui/utils/validators";
import {DefaultValues, SubmitHandler, useForm} from "react-hook-form";
import {Checkbox} from "@material-ui/core";
import TextField from '@mui/material/TextField'
import {NavLink} from "react-router-dom";
import {PATH} from "s1-main/m1-ui/routes/AppRoutes";
import s from './Login.module.css'
import {PasswordInput} from "s1-main/m1-ui/common/PasswordInput/PasswordInput";
import {SuperButton} from "s1-main/m1-ui/common/SuperButton/SuperButton";
import {useAppDispatch} from "s1-main/m3-dal/store";
import {login} from "s1-main/m2-bll/authReducer";

export type FormValues = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm = () => {

    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>()

    const onSubmit: SubmitHandler<FormValues> = (data) => dispatch(login(data))

    return (<div className={s.paperContainer}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    sx={{m: 1, width: '347px'}}
                    id="email"
                    label="Email"
                    variant="standard"
                    margin="normal"
                    color="warning"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    {...register('email', {required: 'Email is a required field!'})}
                />
                <PasswordInput id="password" register={register} error={errors.password}/>

                <div className={s.rememberMe}>
                    <Checkbox id="rememberMe" color='default' {...register('rememberMe')} />
                    <span>Remember me?</span>
                </div>
                <SuperButton

                    xType='default'
                    type="submit"
                    style={{
                        marginTop: '100px',
                        letterSpacing: '0.01em',
                        width: '347px'
                    }}
                    // disabled={appStatus === 'loading'}
                >
                    Login Now
                </SuperButton>
            </form>
            <NavLink to={PATH.RESTORE_PASSWORD} className={s.forgot}>
                Forgot Password?
            </NavLink>
            <div className={s.already}>Don't have an account?
                <NavLink to={PATH.REGISTER}>
                    Register Now
                </NavLink>
            </div>
        </div>

    );
};

// style={{
//     marginTop: '100px',
//         letterSpacing: '0.01em',
//         fontSize: '1.3rem',
//         width: '347px',
//         backgroundColor: '#e76732'
// }}

// export default reduxForm<LoginFormProps>({
//     form: 'Login'
// })(LoginForm);

// const {handleSubmit, error} = props
//const onSubmit = (data) => console.log(data)

// <form onSubmit={handleSubmit}>
//     <Field
//         name={'email'}
//         component={inputField}
//         label={'Email'}
//         type='text'
//         validate={[required, maxLength200, minLength2]}
//         warn={email}
//     />
//     <Field
//         name={'password'}
//         label={'Password'}
//         component={inputField}
//         type='password'
//         validate={[required]}
//     />
//     <div><Field name={'remember me'} component={'input'} type={'checkbox'}/>remember me</div>
//     <div>{error}</div>
//     <div><button>Log in</button></div>
//
// </form>