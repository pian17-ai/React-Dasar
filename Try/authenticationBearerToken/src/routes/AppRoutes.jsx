import { useRoutes } from "react-router-dom";
import userRoutes from "./userRoutes";
import useAuth from "../auth/useAuth";
import publicRoutes from "./publicRoutes";

export default function AppRoutes() {
    const { user } = useAuth();

    const routes = user ? userRoutes : publicRoutes;

    return useRoutes(routes);
}