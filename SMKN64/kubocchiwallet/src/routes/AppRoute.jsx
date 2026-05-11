import { Children } from "react";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import FeaturesPage from "../pages/FeaturesPage";
import LearnPage from "../pages/LearnPage";
import SupportPage from "../pages/SupportPage";
import NotFoundPage from "../pages/NotFoundPage";
import { useRoutes } from "react-router-dom";

export default function AppRoute() {
    const routes = [
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {
                    path: "",
                    element: <HomePage/>
                },
                {
                    path: "features",
                    element: <FeaturesPage/>
                },
                {
                    path: "learn",
                    element: <LearnPage/>
                },
                {
                    path: "support",
                    element: <SupportPage/>
                },
                {
                    path: "*",
                    element: <NotFoundPage/>
                },
            ]
        }
    ];

    return useRoutes(routes);
}