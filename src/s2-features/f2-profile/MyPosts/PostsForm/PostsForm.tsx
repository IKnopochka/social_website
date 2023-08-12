import React, {FormEventHandler} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {textareaField} from "s1-main/m1-ui/utils/RenderValidationField";
import {maxLength200} from "s1-main/m1-ui/utils/validators";
import {SuperButton} from "s1-main/m1-ui/common/SuperButton/SuperButton";
import s from '../../Profile.module.css'

export type PostsFormPropsType = {
    post: string
}

const PostsForm = (props: InjectedFormProps<PostsFormPropsType>) => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <Field
                component={textareaField}
                className={s.textArea}
                name={'post'}
                placeholder={'Add Post'}
                validate={[maxLength200]}
            />
            <SuperButton className={s.addPostButton}>Add New Post</SuperButton>
        </form>
    );
};

export default reduxForm<PostsFormPropsType>({form: 'profilePosts'})(PostsForm);