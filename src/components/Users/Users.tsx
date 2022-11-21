import React from 'react';
import userPhoto from "../../assets/images/images.png";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {UsersPagePropsType} from "./UsersContainer";

type UsersPropsType = {
        onPageChanged: (p: number) => void
    }
    & UsersPagePropsType


const Users = ({onPageChanged, ...props}: UsersPropsType) => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = []
        for (let i = 0; i < pagesCount; i++) {
            pages.push(i + 1)
        }

        let userElement = props.users.map(m => <div key={m.id}>
        <span>
            <div>
                <NavLink to={'/profile/' + m.id}>
                    <img src={m.photos.small !== null ? m.photos.small : userPhoto} className={styles.photo}/>
                </NavLink>
            </div>
            <div>
                {m.followed ? <button disabled={props.processingInProgress.some((id) => id === m.id)}
                                      onClick={() => props.unFollowUserThunkCreator(m.id)}
                    >Unfollow</button>
                    : <button disabled={props.processingInProgress.some(id => id === m.id)}
                              onClick={() => {props.followUserThunkCreator(m.id)}}
                    >Follow</button>}
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

