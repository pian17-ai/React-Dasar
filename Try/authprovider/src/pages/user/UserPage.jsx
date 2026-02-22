import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../auth/AuthService";
import useAuth from "../../auth/useAuth";

export default function UserPage() {
    const { logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutApi();
        logout();

        navigate("/login");
    }

  return (
    <>
      <h1>Selamat Datang User</h1>
      <button onClick={() => handleLogout()} className="px-2 py-1 bg-blue-600 text-white rounded" >Logout</button>
    </>
  );
}
