import { Outlet } from "react-router-dom";
import NavbarUser from "../components/NavbarUser";

export default function UserLayout() {
  return (
    <>
      <NavbarUser />

      <main>
        <Outlet />
      </main>
    </>
  );
}
