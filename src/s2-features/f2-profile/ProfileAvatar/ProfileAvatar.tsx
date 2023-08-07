import React, { FC } from 'react'

import Avatar from '@mui/material/Avatar';

import {avatarSelector} from "s1-main/m1-ui/common/selectors/selectors";
import { useSelector} from "react-redux";
import defaultAvatar from 's1-main/m1-ui/images/defaultProfileImage.png'

type ProfileAvatarPropsType = {
    size: number
    withButton?: boolean
}

export const ProfileAvatar: FC<ProfileAvatarPropsType> = ({ size, withButton }) => {
    const avatar = useSelector(avatarSelector)
    // const dispatch = useAppDispatch()
    //
    // const uploadHandler = (e: ChangeEvent<HTMLInputElement>, callback: (img: string) => void) => {
    //     if (e.target.files && e.target.files.length) {
    //         const file = e.target.files[0]
    //
    //         console.log('file: ', file)
    //
    //         if (file.size < 4000000) {
    //             convertFileToBase64(file, (file64: string) => {
    //                 callback(file64)
    //             })
    //         } else {
    //             console.error('Error: ', 'Файл слишком большого размера')
    //         }
    //     }
    // }
    //
    // const onChangeAvatar = (file64: string) => {
    //     dispatch(changeProfileImageTC(file64))
    // }

    return (
        <div>
            <Avatar
                src={avatar ? avatar : defaultAvatar}
                style={{ width: `${size}px`, height: `${size}px` }}
                alt="ava"
            />
            {/*{withButton && (*/}
            {/*    <label>*/}
            {/*        <input*/}
            {/*            type="file"*/}
            {/*            onChange={e => uploadHandler(e, onChangeAvatar)}*/}
            {/*            style={{ display: 'none' }}*/}
            {/*            accept="image/png, image/jpeg, image/svg"*/}
            {/*        />*/}
            {/*        <IconButton*/}
            {/*            component="span"*/}
            {/*            style={{*/}
            {/*                position: 'absolute',*/}
            {/*                bottom: '-12px',*/}
            {/*                right: '-15px',*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <CloudUploadIcon />*/}
            {/*        </IconButton>*/}
            {/*    </label>*/}
            {/*)}*/}
        </div>
    )
}
