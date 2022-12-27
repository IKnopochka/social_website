import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootReducerType} from "../../state/redux-store";
import {DataStateType, setAuthUserData, getAuthUserDataTC, logoutTC} from "../../state/authReducer";

export type HeaderContainerPropsTypes = DataStateType & {
    setAuthUserData: (data: DataStateType, isAuth: boolean) => void
    getAuthUserDataTC: () => void
    logoutTC: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsTypes> {
    componentDidMount() {
        this.props.getAuthUserDataTC()
        /*authAPI.getAuth().then(data => {
            if(data.resultCode === 0) {
                this.props.setAuthUserData(data.data)
            }
        })*/
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToPros = (state: RootReducerType): DataStateType => {
    return {
        id: state.auth.id, //no need
        email: state.auth.email, //no need
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToPros, {setAuthUserData, getAuthUserDataTC, logoutTC})(HeaderContainer)