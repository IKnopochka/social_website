import React from 'react';
import  {Field, InjectedFormProps, reduxForm} from "redux-form";
import {textareaField} from "s1-main/m1-ui/utils/RenderValidationField";
import {maxLength200} from "s1-main/m1-ui/utils/validators";

export type MessageFormPropsType = {
    message: string
}

const MessageForm = (props: InjectedFormProps<MessageFormPropsType>) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name={'message'}
                component={textareaField}
                placeholder={'Enter your message'}
                validate={[maxLength200]}
            />
            <button>Add Message</button>
        </form>

    );
};

export default reduxForm<MessageFormPropsType>({form: 'dialog'})(MessageForm);