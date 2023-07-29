import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {compose} from "redux";
import {BrowserRouter, HashRouter, Navigate, Route, Routes} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const DialogsContainer = React.lazy(() => import('./components/Navbar/Messages/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
// import DialogsContainer from "./components/Navbar/Messages/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";

import {connect} from "react-redux";
import {withRouter} from "HOC/withRouter";
import {initializeApp} from "state/appReducer";
import Preloader from "./components/Preloader/Preloader";
import {AppRootStateType} from "state/redux-store";
import {Layout} from "common/header/Layout";
import {AppRoutes, PATH} from "common/routes/AppRoutes";
import {getAuthUserData} from "state/authReducer";

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }


    render() {
        if (!this.props.initialized) return <Preloader/>

        console.log(this.props.isAuth)

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                {this.props.isAuth && <Navbar/>}
                <AppRoutes/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

//types
type AppPropsType = {
    initializeApp: () => void
    initialized: boolean
    isAuth: boolean
}
//& AppRootStateType
