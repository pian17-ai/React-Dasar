import api from "../api/api";

export const register = (payload) => {
    return api.post('/register', payload);
}

export const login = (payload) => {
    return api.post('/login', payload);
}

export const logout = () => {
    return api.post('/logout');
}