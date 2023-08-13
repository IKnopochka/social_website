import React from "react";
import ProfileInfo from "s2-features/f2-profile/ProfileDescription/ProfileInfo/ProfileInfo"
import MyPostsContainer from "s2-features/f2-profile/MyPosts/MyPostsContainer";
import {ProfileMapStateToPropsType} from "s2-features/f2-profile/ProfileContainer";
import Box from "@mui/material/Box";

const Profile = (props: ProfileMapStateToPropsType & { updateStatus: (status: string) => void }) => {
    return (
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    flexGrow: '1',
                    '& > :not(style)': {
                    margin: '10px',
                        padding: '10px'
                    },
                }}
            >
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer/>
            </Box>
    )
}
export default Profile;