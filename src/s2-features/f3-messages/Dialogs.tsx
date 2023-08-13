import React from "react";
import s from "s2-features/f3-messages/Dialogs.module.css";
import {FriendBox} from "s2-features/f3-messages/FriendBox/FriendBox";
import MessageTextForm, {MessageFormPropsType} from "s2-features/f3-messages/MessageForm/MessageForm";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { ChatInitialStateType, MichailID} from "s1-main/m2-bll/message-reducer";
import Message from "s2-features/f3-messages/message/Message";
import FriendMessage from "s2-features/f3-messages/friend-message/FriendMessage";

const Dialogs = (props: DialogsPagePropsType) => {

    let friendsPic = props.friends.find(f => f.id === MichailID )
    let friendElements = props.friends.map(d => (<FriendBox id={d.id} name={d.name} src={d.src}/>))
    let messagesElements = props.messages[MichailID].map(m => m.personalMessage ?
        <Message id={m.id} personalMessage={m.personalMessage}/> :
        <FriendMessage id={m.id} friendMessage={m.friendMessage} pic={friendsPic?.src}/> )

    const Submit = (data: MessageFormPropsType) => {
        props.AddMessageThunkCreator(MichailID, data.message)
    }
    return <Box
        sx={{
            display: 'flex',
            flexGrow: '1',
            margin: '10px',
        }}
    >
        <Paper elevation={5} className={s.friendBox}>
            {friendElements}
        </Paper>
        <Paper elevation={5} className={s.chatContainer}>
            <div className={s.chatBox}>{messagesElements}</div>
            <MessageTextForm onSubmit={Submit}/>
        </Paper>
    </Box>
}

export default Dialogs

//types
export type DialogsMapToDispatchPropsType = {
    AddMessageThunkCreator: (userId: string, message: string) => void
}
export type DialogsPagePropsType = DialogsMapToDispatchPropsType & ChatInitialStateType