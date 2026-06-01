import { Outlet, useNavigate } from "react-router-dom";
import { logoutSer } from "../auth/authServices";
import useAuth from "../auth/useAuth";

export default function UserLayout() {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async() => {
        try {
            await logoutSer();
            logout();
            navigate("/login");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
        <nav className="bg-slate-800 text-white flex px-4 py-2">
            <h1 className="flex-1">Pintar Menabung</h1>
            <ul className="flex">
                <li className="mr-1">Home</li>
                <li className="mr-1">Category</li>
                <li className="mr-1">Currency</li>
                <li className="mr-1">Transaction</li>
                <li className="mr-1">Wallet</li>
            </ul>
            <h1 className="mr-1">{user.name}</h1>
            <button onClick={() => handleLogout()} className="px-1 rounded-md bg-red-500">Logout</button>
        </nav>
        <main>
            <Outlet/>
        </main>
        <footer className="text-center text-slate-500">
            <p>Pintar Menabung 1.0 - LKSN @2026</p>
        </footer>
        </>
    )
}