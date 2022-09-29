import React from 'react';
import {AllUsersPropsType} from "../../state/usersReducer";
import {MapToDispatchPropsType} from "./UsersContainer";
import styles from './Users.module.css'

import userPhoto from '../../assets/images/images.png'
import {usersAPI} from "../../API/API";


type UsersPagePropsType = AllUsersPropsType & MapToDispatchPropsType

/*const Users = (props: UsersPagePropsType) => {

    let getUsers = () => {
        console.log('users', props.users)
        if(props.users.length === 0) {

            usersAPI.getUsers().then(response => {
                console.log('users', response)
                props.setUsers(response.data.items)
            })}

    }

/!*    if(props.users.length === 0) {props.setUsers([
        {
            id: 1,
            name: 'Irina',
            src: 'https://klike.net/uploads/posts/2019-09/1568622594_22.jpg',
            status: 'I am a supergirl',
            location: {city: 'Minsk', country: 'Belarus'},
            followed: true
        },
        {
            id: 2,
            name: 'Michael',
            src: 'https://klike.net/uploads/posts/2019-09/1568622594_22.jpg',
            status: 'I am a boss',
            location: {city: 'LA', country: 'USA'},
            followed: true
        },
        {
            id: 3,
            name: 'Myshka',
            src: 'https://klike.net/uploads/posts/2019-09/1568622594_22.jpg',
            status: 'I am a Plyushka',
            location: {city: 'Myaginarium', country: 'Myafland'},
            followed: false
        },
        {
            id: 4,
            name: 'Asta',
            src: 'https://klike.net/uploads/posts/2019-09/1568622594_22.jpg',
            status: 'I love you all',
            location: {city: 'LosAngeles', country: 'USA'},
            followed: false
        }
    ])}*!/



    let userElement = props.users.map(m => <div key={m.id}>
        <span>
            <div><img src={m.photos.small !== null ? m.photos.small : userPhoto} className={styles.photo}/></div>
            <div>
                {m.followed ? <button onClick={() => {
                        props.unfollow(m.id)
                    }}>Follow</button>
                    : <button onClick={() => {
                        props.follow(m.id)
                    }}>Unfollow</button>}
            </div>
        </span>
        <span>
        <span>
            <div>{m.name}</div>
            <div>{m.status}</div>
        </span>
        <span>
            <div>{"m.location.city"}</div>
            <div>{"m.location.country"}</div>
        </span>
        </span>

    </div>)

    return (<div>
            <button onClick={getUsers}>GetUsers</button>
            <div>{userElement}</div>
    </div>

    );
};*/
