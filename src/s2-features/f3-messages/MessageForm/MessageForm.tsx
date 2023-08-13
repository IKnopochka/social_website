import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {textareaField} from "s1-main/m1-ui/common/fields/Fields";
import {maxLength200} from "s1-main/m1-ui/utils/validators";
import s from '../Dialogs.module.css'
import {SuperButton} from "s1-main/m1-ui/common/SuperButton/SuperButton";

export type MessageFormPropsType = {
    message: string
}

const MessageForm = (props: InjectedFormProps<MessageFormPropsType>) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={s.textBox}>
            <Field
                name={'message'}
                component={textareaField}
                placeholder={'Enter your message'}
                validate={[maxLength200]}
                className={s.textArea}
            />
            <SuperButton  className={s.button}>Add Message</SuperButton>
        </form>

    );
};

export default reduxForm<MessageFormPropsType>({form: 'dialog'})(MessageForm);