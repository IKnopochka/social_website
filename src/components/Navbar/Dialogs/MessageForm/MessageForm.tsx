import React from 'react';
import  {Field, InjectedFormProps, reduxForm} from "redux-form";
import {textareaField} from "../../../../assets/ValidationForm/RenderValidationField";
import {maxLength20} from "../../../../assets/ValidationForm/validators";

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
                validate={[maxLength20]}
            />
            <button>Add Message</button>
        </form>

    );
};

export default reduxForm<MessageFormPropsType>({form: 'dialog'})(MessageForm);