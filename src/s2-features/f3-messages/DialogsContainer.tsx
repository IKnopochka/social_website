import React, {ComponentType} from "react";
import {compose} from "redux";
import {withAuthRedirect} from "s1-main/m1-ui/HOCs/withAuthRedirect";
import {connect} from "react-redux";
import { AddMessageThunkCreator, ChatInitialStateType} from "s1-main/m2-bll/message-reducer";
import Dialogs from "s2-features/f3-messages/Dialogs";
import { AppRootStateType} from "s1-main/m3-dal/store";

let mapStateToProps = (state: AppRootStateType): ChatInitialStateType => {
    return {
        friends: state.dialogsPage.friends,
        messages: state.dialogsPage.messages,

    }
}
// let mapDispatchToProps = (dispatch: AppDispatch): DialogsMapToDispatchPropsType => {
//     return {
//         onAddMessage: (userId: string, message: string) => {
//             dispatch(AddMessageThunkCreator(userId, message))
//         }
//     }
// }

export default compose<ComponentType>(
    connect(mapStateToProps, {AddMessageThunkCreator}),
    withAuthRedirect,
)(Dialogs)