import MainLayout from "../layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import HomePage from "../pages/HomePage";

const routes = {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            path: "",
            element: <HomePage/>
        },
        {
            path: "about",
            element: <AboutPage/>
        },
        {
            path: "blog",
            element: <BlogPage/>
        }
    ]
}

export default routes;