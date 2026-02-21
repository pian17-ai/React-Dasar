import { useRoutes } from "react-router-dom";
import guestRoute from "./guestRoute";

export default function AppRoute() {
    const element = guestRoute;

    return useRoutes(element);
}