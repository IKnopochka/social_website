import React from "react";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../../state/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootReducerType} from "../../../../state/redux-store";
import {PostsMapToDispatchPropsType, PostsPropsType} from "../../../../state/store";

/*const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    const onAddPost = () => {
                        store.dispatch(AddPostActionCreator());
                    }

                    const onPostChange = (text: string) => {
                        /!*props.updateNewPostText(newPostElement.current.value);*!/
                        /!*props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value});*!/
                        store.dispatch(UpdateNewPostTextActionCreator(text));

                    }
                    return (
                        <MyPosts updateNewPostText={onPostChange}
                                   addPost={onAddPost}
                                   posts={store.getState().profilePage.posts}
                                   newPostText={store.getState().profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>

    )
}*/

const mapStateToProps = (state: RootReducerType): PostsPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): PostsMapToDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {dispatch(UpdateNewPostTextActionCreator(text))},
        addPost: () => {dispatch(AddPostActionCreator()
)
}
    }
}

const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default SuperMyPostsContainer;