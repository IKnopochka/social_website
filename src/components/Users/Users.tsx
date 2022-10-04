import React from 'react';
import userPhoto from "../../assets/images/images.png";
import styles from "./Users.module.css";
import {AllUsersPropsType} from "../../state/usersReducer";

type UsersPropsType = {
        onPageChanged: (p: number) => void
        follow: (id: number) => void
        unfollow: (id: number) => void
    }
    & AllUsersPropsType


const Users = ({onPageChanged, ...props}:UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)
    }

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
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
            <div>{userElement}</div>
        </div>

    );
}
;

export default Users

