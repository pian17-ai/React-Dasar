import LoginPage from "../pages/public/LoginPage";
import RegisterPage from "../pages/public/RegisterPage";

const publicRoutes = [
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "*",
        element: <RegisterPage/>
    }
];

export default publicRoutes;