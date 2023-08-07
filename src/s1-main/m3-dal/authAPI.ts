import axios from "axios";
import {FormValues} from "s2-features/f1-login/LoginForm";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": 'caec2d06-05c5-409a-8dd4-1ef5ae91b427'
    }
})

export const authAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url')
            .then(response => response.data)
    },
    authMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login({email, password, rememberMe = false}: FormValues) {
        return instance.post('auth/login', {email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => response.data)
    }
}