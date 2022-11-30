import axios from "axios";
import {log} from "util";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": 'caec2d06-05c5-409a-8dd4-1ef5ae91b427'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => (
                console.log(response),
                    response.data
            ))
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
/*            .then(response => (
                response.data,
        console.log(response)
    ))*/
    },
    changeStatus(status: string) {
        return instance.put('profile/status', {status: status})
    }

}