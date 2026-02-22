import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../auth/AuthService";
import useAuth from "../../auth/useAuth";

export default function AdminPage() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        logoutApi();

        navigate("/login", {replace: true});
    }

  return (
    <>
      <h1>Selamat Datang Admin</h1>
      <button onClick={() => handleLogout()} className="px-2 py-1 bg-blue-600 text-white rounded">Logout</button>
    </>
  );
}
