import React from 'react';
import {AllUsersPropsType} from "../../state/usersReducer";
import {MapToDispatchPropsType} from "./UsersContainer";
import styles from './Users.module.css'

import userPhoto from '../../assets/images/images.png'
import {usersAPI} from "../../API/API";


type UsersPagePropsType = AllUsersPropsType & MapToDispatchPropsType

class User extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        usersAPI.getUsers().then(response => {
        console.log('users', response)
        this.props.setUsers(response.data.items)
    });
    }

    render() {
        let userElement = this.props.users.map(m => <div key={m.id}>
        <span>
            <div><img src={m.photos.small !== null ? m.photos.small : userPhoto} className={styles.photo}/></div>
            <div>
                {m.followed ? <button onClick={() => {
                        this.props.unfollow(m.id)
                    }}>Follow</button>
                    : <button onClick={() => {
                        this.props.follow(m.id)
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
                <div>{userElement}</div>
            </div>

        );
    }
}


export default User;