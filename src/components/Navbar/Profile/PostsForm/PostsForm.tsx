import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {textareaField} from "../../../../assets/ValidationForm/RenderValidationField";
import {maxLength200} from "../../../../assets/ValidationForm/validators";

export type PostsFormPropsType = {
    post: string
}

const PostsForm = (props: InjectedFormProps<PostsFormPropsType>) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                component={textareaField}
                name={'post'}
                placeholder={'Add Post'}
                validate={[maxLength200]}
            />
            <div><button>Add Post</button></div>
            <div><button>Remove</button></div>
        </form>
    );
};

export default reduxForm<PostsFormPropsType>({form: 'profilePosts'})(PostsForm);