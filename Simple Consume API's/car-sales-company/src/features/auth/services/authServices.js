import api from "../../../api/axios";

export const register = (data) => {
    api.post("/register", data)
}