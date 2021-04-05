import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '41731fbd-beb5-4ab2-8995-fb6aa3e1fbd4'
    }
});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

    follow: (userId) => {
        return instance.post(`follow/${userId}`).then(response => response.data);
    },

    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
};


