import {addPost, deletePost, profileReducer} from "s1-main/m2-bll/profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'test', likeCount: 2},
        {id: 2, message: 'teghst', likeCount: 2},
    ],
    status: 'test',
    profile: {
        aboutMe: "test",
        contacts: {
            facebook: "test",
            website: "test",
            vk: "test",
            twitter: "test",
            instagram: "test",
            youtube: "test",
            github: "test",
            mainLink: "test"
        },
        lookingForAJob: true,
        lookingForAJobDescription: "test",
        fullName: "test",
        userId: 1,
        photos: {
            small: "",
            large: ""
        }
    }
}

it('length of posts should be incremented', () => {
    //1. test data
    let action = addPost('it')
    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts.length).toBe(3)
})
it('message should be correct', () => {
    //1. test data
    let action = addPost('it')
    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts[1].message).toBe("it")
})
it('post should be deleted', () => {
    //1. test data
    let action = deletePost(1)
    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts.length).toBe(1)
})