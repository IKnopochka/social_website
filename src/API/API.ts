import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": '3ca98290-6a41-4532-9dc0-155c0d3db3d1'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getAuth() {
        return instance.get('auth/me', {withCredentials: true})
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`, {}, {
            headers: {
                'API-KEY': 'caec2d06-05c5-409a-8dd4-1ef5ae91b427'
            }
        })
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`, {
            headers: {
                'API-KEY': 'caec2d06-05c5-409a-8dd4-1ef5ae91b427'
            }
        })
    }
}
