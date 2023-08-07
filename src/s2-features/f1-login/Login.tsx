import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "s1-main/m3-dal/store";
import {PATH} from "s1-main/m1-ui/routes/AppRoutes";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { LoginForm} from "s2-features/f1-login/LoginForm";

type mapStateToPropsType = {
    isAuth: boolean
}
type LoginProps = {} & mapStateToPropsType

const Login = (props: LoginProps) => {

    if (props.isAuth) return <Navigate to={PATH.PROFILE}/>
    return <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            margin: '50px auto',
            '& > :not(style)': {
                m: 1,
                width: '413px',
                height: '552px',
            },
        }}
    >
        <Paper elevation={5}>
            <LoginForm/>
        </Paper>
    </Box>
};

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps)(Login)