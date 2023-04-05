import React from 'react';
import userPhoto from "../../assets/images/images.png";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {UsersPagePropsType} from "./UsersContainer";
import {UsersPropsType} from "./Users";

export const Paginator = ({onPageChanged, totalUsersCount, pageSize, currentPage, ...props}: UsersPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)
    }

    return <div>
        {pages.map(p => {
            return <span className={currentPage === p ? styles.selectedPage : ''}
                         onClick={() => {
                             onPageChanged(p)
                         }}>{p}</span>
        })}
    </div>
}

