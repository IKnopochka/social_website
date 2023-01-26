import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../state/redux-store";
import {logout} from "../../state/authReducer";

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