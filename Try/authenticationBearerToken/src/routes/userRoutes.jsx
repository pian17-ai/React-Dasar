import UserLayout from "../layouts/UserLayout";
import HomePage from "../pages/user/HomePage";

const userRoutes = [
  {
    path: "",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
];

export default userRoutes;
