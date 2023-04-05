import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {compose} from "redux";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import DialogsContainer from "./components/Navbar/Messages/DialogsContainer";
import {connect} from "react-redux";
import {withRouter} from "./HOC/withRouter";
import {initializeApp} from "./state/appReducer";
import Preloader from "./components/Preloader/Preloader";
import {AppRootStateType} from "./state/redux-store";

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={'/'} element={<Navigate to={'/profile'}/>}/>

                            <Route path={'/profile/:userId'} element={<ProfileContainer/>}/>
                            <Route path={'/profile'} element={<ProfileContainer/>}/>
                            <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                            <Route path={'/news'} element={<News/>}/>
                            <Route path={'/music'} element={<Music/>}/>
                            <Route path={'/settings'} element={<Settings/>}/>
                            <Route path={'/users'} element={<UsersContainer/>}/>
                            <Route path={'/login'} element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        initialized: state.app.initialized
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
}
//& AppRootStateType
