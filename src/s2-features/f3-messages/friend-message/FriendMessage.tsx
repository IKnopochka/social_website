import React from 'react'
import s from 's2-features/f3-messages/friend-message/FriendMessage.module.css'
import {SingleMessagePropsType} from "s1-main/m2-bll/message-reducer";
import friendAva from '../../../s1-main/m1-ui/images/avatar.png'


const FriendMessage = (props: SingleMessagePropsType & {pic: string | undefined}) => {
    return (
        <div
            id={'hw1-friend-message-' + props.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.id}
                    src={props.pic}
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.id}
                        className={s.friendName}
                    >
                        Michael
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.id}
                        className={s.friendMessageText}
                    >
                        {props.friendMessage}
                    </pre>
                </div>
            </div>
            {/*<div*/}
            {/*    id={'hw1-friend-time-' + props..id}*/}
            {/*    className={s.friendTime}*/}
            {/*>*/}
            {/*    /!*создаёт студент*!/*/}
            {/*    {props.message.message.time}*/}
            {/*    /!**!/*/}
            {/*</div>*/}
        </div>
    )
}

export default FriendMessage
