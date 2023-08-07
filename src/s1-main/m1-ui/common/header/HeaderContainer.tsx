import React from "react";
import Header from "s1-main/m1-ui/common/header/Header";
import {connect} from "react-redux";
import {AppRootStateType} from "s1-main/m3-dal/store";
import {logout} from "s1-main/m2-bll/authReducer";

export type HeaderContainerPropsType = {
    logout: () => void
    isAuth: boolean
    login: boolean
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToPros = (state: AppRootStateType)=> {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToPros, {logout})(HeaderContainer)