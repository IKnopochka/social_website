import classes from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import {
    AddPostActionCreator,
    ProfilePropsType,
    UpdateNewPostTextActionCreator
} from "../../../../state/State";

const MyPosts = (props: ProfilePropsType) => {

    let postElements = props.posts.map(p => (<Post id={p.id} message={p.message} likeCount={p.likeCount}/>))

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
            props.dispatch(AddPostActionCreator());
    }

    const onPostChange = () => {
        if(newPostElement.current) {
            /*props.updateNewPostText(newPostElement.current.value);*/
            /*props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value});*/
            props.dispatch(UpdateNewPostTextActionCreator(newPostElement.current.value));
        }
    }

    return (
        <div className={classes.textArea}>
            my posts
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;