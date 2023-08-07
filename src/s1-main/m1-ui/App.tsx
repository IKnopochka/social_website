import React, {Suspense} from 'react';
import s from 's1-main/m1-ui/App.module.css';
import Navbar from "s1-main/m1-ui/common/navbar/Navbar";
import {compose} from "redux";
import HeaderContainer from "s1-main/m1-ui/common/header/HeaderContainer";


import {connect} from "react-redux";
import {withRouter} from "s1-main/m1-ui/HOCs/withRouter";
import {initializeApp} from "s1-main/m2-bll/appReducer";
import Preloader from "s1-main/m1-ui/common/preloader/Preloader";
import {AppRootStateType} from "s1-main/m3-dal/store";
import {AppRoutes, PATH} from "s1-main/m1-ui/routes/AppRoutes";

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }


    render() {
        if (!this.props.initialized) return <Preloader/>

        console.log(this.props.isAuth)

        return (
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <div className={s.appWrapperContent}>
                    {this.props.isAuth && <Navbar/>}
                    <AppRoutes/>
                </div>

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
