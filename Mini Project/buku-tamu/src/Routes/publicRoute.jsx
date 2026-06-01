import LoginPage from "../pages/public/LoginPage";
import RegisterPage from "../pages/public/RegisterPage";

const publicRoute = [
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
];

export default publicRoute;