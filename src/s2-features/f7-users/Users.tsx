import React from 'react';
import defaultPhoto from "s1-main/m1-ui/images/defaultProfileImage.png";
import s from "s2-features/f7-users/Users.module.css";
import {NavLink} from "react-router-dom";
import {UsersPagePropsType} from "s2-features/f7-users/UsersContainer";
import {Paginator} from "s1-main/m1-ui/common/Paginator";
import Paper from "@mui/material/Paper";
import {ProfileAvatar} from "s2-features/f2-profile/ProfileDescription/ProfileAvatar";
import {PATH} from "s1-main/m1-ui/routes/AppRoutes";
import {SuperButton} from "s1-main/m1-ui/common/SuperButton/SuperButton";
import locationImg from '../../s1-main/m1-ui/images/location.svg'

export type UsersPropsType = {
        onPageChanged: (p: number) => void
    }
    & UsersPagePropsType


const Users = ({onPageChanged, ...props}: UsersPropsType) => {

        let userElement = props.users.map(m => <Paper elevation={5} key={m.id} className={s.paper}>
            <div className={s.profileContainer}>
                <NavLink to={PATH.PROFILE_ID + m.id}>
                    <ProfileAvatar src={m.photos.small} size={100}/>
                </NavLink>
                <div className={s.profileInfo}>
                    <div className={s.profileName}>
                        <h3>{m.name}</h3>
                        <div>{m.status}</div>
                    </div>
                    <div className={s.location}>
                        <img src={locationImg}/>
                        {"San Diego"}, {"United States"}
                    </div>
                </div>
            </div>
            {
                m.followed
                    ? <SuperButton disabled={props.processingInProgress.some((id) => id === m.id)}
                                   onClick={() => props.unFollowUserThunkCreator(m.id)}
                                   className={s.button}
                    >Unfollow</SuperButton>
                    : <SuperButton disabled={props.processingInProgress.some(id => id === m.id)}
                                   onClick={() => {
                                       props.followUserThunkCreator(m.id)
                                   }}
                                   className={s.button}
                    >Follow</SuperButton>
            }
        </Paper>)

        return (<div>
                <Paginator onPageChanged={onPageChanged} {...props}/>
                <div>{userElement}</div>
            </div>

        );
    }
;

export default Users

