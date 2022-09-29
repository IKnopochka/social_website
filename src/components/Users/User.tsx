import React from 'react';
import {AllUsersPropsType} from "../../state/usersReducer";
import {MapToDispatchPropsType} from "./UsersContainer";
import styles from './Users.module.css'

import userPhoto from '../../assets/images/images.png'
import {usersAPI} from "../../API/API";


type UsersPagePropsType = AllUsersPropsType & MapToDispatchPropsType

class User extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
        this.props.setUsers(response.data.items)
    });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for(let i = 0; i < pagesCount; i++) {
            pages.push(i+1)
        }

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
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? styles.selectedPage : ''}
                    onClick={() => {this.props.setCurrentPage(p)}}>{p}</span>
                })}
                <div>{userElement}</div>
            </div>

        );
    }
}


export default User;