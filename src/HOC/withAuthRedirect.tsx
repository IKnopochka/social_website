import React, {ComponentType} from 'react';
import {Navigate} from 'react-router-dom';
import {AppRootStateType} from "../state/redux-store";
import {connect} from "react-redux";
import {PATH} from "common/routes/AppRoutes";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T extends MapStateToPropsType>(Component: ComponentType<T>) {
    function NavigateComponent(props: MapStateToPropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={PATH.LOGIN}/>
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(NavigateComponent);
};


