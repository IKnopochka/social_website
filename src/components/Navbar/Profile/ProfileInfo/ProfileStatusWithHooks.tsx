import React, {ChangeEvent, useEffect, useState} from 'react';

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
        debugger
        setStatus(props.status)
    }, [props.status])

    return <div>
        {!editMode
            ? <span onDoubleClick={() => setEditMode(true)}>{props.status}</span>
            : <input autoFocus
                     onChange={(e) => {setStatus(e.currentTarget.value)}}
                     onBlur={() => {
                setEditMode(false)
                         props.updateStatus(status)

            }}
                     value={status}
            />}

    </div>
}
