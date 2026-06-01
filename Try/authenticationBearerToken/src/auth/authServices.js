import api from "../api/api"

export const loginSer = (payload) => {
    return api.post('/auth/login', payload);
};

export const registerSer = (payload) => {
    return api.post('/auth/register', payload);
}

export const logoutSer = () => {
    return api.post('/auth/logout');
}