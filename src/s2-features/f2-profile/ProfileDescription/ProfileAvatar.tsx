import React, {ChangeEvent, FC} from 'react'

import Avatar from '@mui/material/Avatar';
import {deepOrange} from '@mui/material/colors';


import {avatarSelector} from "s1-main/m1-ui/common/selectors/selectors";
import {useSelector} from "react-redux";
import defaultAvatar from 's1-main/m1-ui/images/defaultProfileImage.png'
import {useAppDispatch} from "s1-main/m3-dal/store";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import IconButton from "@mui/material/IconButton";
import s from 's2-features/f2-profile/Profile.module.css'
import {changeProfileImageTC} from "s1-main/m2-bll/profile-reducer";
import {convertFileToBase64} from "s1-main/m1-ui/utils/convertFileToBase64";

type ProfileAvatarPropsType = {
    size: number
    withButton?: boolean
}

export const ProfileAvatar: FC<ProfileAvatarPropsType> = ({size, withButton, ...props}) => {
    const avatar = useSelector(avatarSelector)
    const dispatch = useAppDispatch()

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>, callback: (img: string) => void) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]

            console.log('file: ', file)

            if (file.size < 4000000) {
                convertFileToBase64(file, (file64: string) => {
                    callback(file64)
                })
            } else {
                console.error('Error: ', 'Файл слишком большого размера')
            }
        }
    }

    const onChangeAvatar = (file64: string) => {
        console.log('om dispatch happened')
        //dispatch(changeProfileImageTC(file64))
     dispatch(changeProfileImageTC('https://img1.wallspic.com/previews/1/9/3/5/6/165391/165391-anime-shoto_todoroki-anime_girl-head-eye-500x.jpg'))

    }

    return (
        <div className={s.avatar}>
            <Avatar
                sx={{width: `${size}px`, height: `${size}px`, bgcolor: deepOrange[500]}}
                src={avatar}
            />
            {withButton &&
            <label>
                <input
                    type="file"
                    onChange={e => uploadHandler(e, onChangeAvatar)}
                    style={{display: 'none'}}
                    accept="image/png, image/jpeg, image/svg"
                />
                <IconButton
                    component="span"
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                    }}
                >
                    <CloudUploadIcon fontSize='large' sx={{fill: '#2c2c2c'}}/>
                </IconButton>
            </label>
            }

        </div>
    )
}
