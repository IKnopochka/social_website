import axios, {AxiosResponse} from "axios";
import {UserPropsType} from "s1-main/m2-bll/users-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": 'caec2d06-05c5-409a-8dd4-1ef5ae91b427'
    }
})

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    changeStatus(status: string) {
        return instance.put('profile/status', {status})
    },
    uploadPhoto(image: string) {
        return instance.put<AxiosResponse<UpdateProfileResponseType<PhotosType>>>('profile/photo', {image})
    }

}

//types

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
    userId: number
}

export type UpdateProfileResponseType<D = {}> = {
    data: D
    resultCode: number
    messages: string[]
}

type PhotosType = {
    small: string | null
    large: string | null
}
