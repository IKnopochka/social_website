import React, {ChangeEvent, useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import s from 's2-features/f2-profile/Profile.module.css'
import EditIcon from '@mui/icons-material/Edit';

type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export function ProfileStatusWithHooks(props: ProfileStatusWithHooksPropsType) {

    // componentDidUpdate(prevProps: Readonly<ProfileStatusWithHooksPropsType>, prevState: Readonly<{}>) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return <div>
        <EditIcon fontSize={"small"} sx={{marginRight: '5px'}}/>
        {!editMode
            ? <span className={s.editModeOff} onDoubleClick={() => setEditMode(true)}>{props.status}</span>
            : <TextField autoFocus
                         variant="standard"
                         color={"warning"}
                         onChange={(e) => {
                             setStatus(e.currentTarget.value)
                         }}
                         onBlur={() => {
                             setEditMode(false)
                             props.updateStatus(status)

                         }}
                         value={status}
            />}

    </div>
}
