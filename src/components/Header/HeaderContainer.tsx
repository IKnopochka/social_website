import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootReducerType} from "../../state/redux-store";
import {DataStateType, setAuthUserData, setAuthUserDataThunkCreator} from "../../state/authReducer";

type HeaderContainerPropsTypes = DataStateType & {
    setAuthUserData: (data: DataStateType) => void
    setAuthUserDataThunkCreator: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsTypes> {
    componentDidMount() {
        this.props.setAuthUserDataThunkCreator()
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

export default connect(mapStateToPros, {setAuthUserData, setAuthUserDataThunkCreator})(HeaderContainer)