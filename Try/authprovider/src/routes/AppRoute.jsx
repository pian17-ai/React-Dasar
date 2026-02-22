import { useRoutes } from "react-router-dom";
import guestRoute from "./guestRoute";
import adminRoute from "./adminRoute";
import userRoute from "./userRoute";
import useAuth from "../auth/useAuth";

export default function AppRoute() {
  const { user, loading } = useAuth();

  if (loading) return null;

  const element = !user
    ? guestRoute
    : user?.role === "admin" //fixing role page nya yahh, ayo semangat demi Kayla
      ? adminRoute
      : userRoute;

  return useRoutes(element);
}
