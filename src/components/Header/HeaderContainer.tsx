import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootReducerType} from "../../state/redux-store";
import {DataStateType, setAuthUserData} from "../../state/authReducer";
import {usersAPI} from "../../API/API";

type HeaderContainerPropsTypes = DataStateType & {
    setAuthUserData: (data: DataStateType) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsTypes> {
    componentDidMount() {
        usersAPI.getAuth().then(response => {

            if(response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data)
            }
        })
    }

    render() {
        return <div>
            <Header {...this.props}/>
        </div>
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

export default connect(mapStateToPros, {setAuthUserData})(HeaderContainer)