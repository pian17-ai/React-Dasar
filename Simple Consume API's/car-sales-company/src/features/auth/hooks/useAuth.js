import { login as loginService } from "../services/authServices";

export function useAuth() {
    const login = async (id_card_number, password) => {
        try {
            const response = await loginService({
                id_card_number,
                password
            });

            localStorage.setItem("token", response.data.token);
        }
    }
}