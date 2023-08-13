import React from 'react'
import s from 's2-features/f3-messages/message/Message.module.css'
import {SingleMessagePropsType} from "s1-main/m2-bll/message-reducer";
import ava from '../../../s1-main/m1-ui/images/avatar.png'

const Message = (props: SingleMessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.id}
                    src={ava}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.id} className={s.name}>
                        IKnopochka
                    </div>
                    <pre id={'hw1-text-' + props.id} className={s.messageText}>
                        {props.personalMessage}
                    </pre>
                </div>
            </div>
            {/*<div id={'hw1-time-' + props.id} className={s.time}>*/}
            {/*    /!*создаёт студент*!/*/}
            {/*    {props.message.message.time}*/}
            {/*    /!**!/*/}
            {/*</div>*/}
        </div>
    )
}

export default Message
