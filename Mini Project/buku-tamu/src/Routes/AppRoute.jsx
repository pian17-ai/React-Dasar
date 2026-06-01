import publicRoute from "./publicRoute";
import adminRoute from "./adminRoute";
import userRoute from "./userRoute";
import { useRoutes } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function AppRoute() {
    const { user } = useAuth();

    const e = !user
    ? publicRoute
    : user?.role === "admin"
    ? [adminRoute]
    : [userRoute];

    return useRoutes(e);
}