import React, {ComponentType} from "react";
import {AddMessageActionCreator} from "../../../state/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {RootReducerType} from "../../../state/redux-store";
import {DialogsMapToDispatchPropsType, DialogsPropsType} from "../../../state/store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {connect} from "react-redux";

let mapStateToProps = (state: RootReducerType): DialogsPropsType => {
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
    withAuthRedirect
)(Dialogs)