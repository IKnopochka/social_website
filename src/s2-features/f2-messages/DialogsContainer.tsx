import React, {ComponentType} from "react";
import {AddMessageActionCreator} from "s1-main/m2-bll/dialogsPageReducer";
import Dialogs from "s2-features/f2-messages/Dialogs";
import {AppRootStateType} from "s1-main/m3-dal/store";
import {DialogsMapToDispatchPropsType, DialogsPropsType} from "s1-main/m3-dal/types";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "s1-main/m1-ui/HOCs/withAuthRedirect";
import {connect} from "react-redux";

let mapStateToProps = (state: AppRootStateType): DialogsPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): DialogsMapToDispatchPropsType => {
    return {
        onAddMessage: (message: string) => {dispatch(AddMessageActionCreator(message))}
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)