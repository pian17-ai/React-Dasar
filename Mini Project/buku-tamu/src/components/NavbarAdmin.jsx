import { Link } from "react-router-dom";

export default function NavbarAdmin() {
    return (
        <nav className="flex bg-slate-700 text-white px-4 py-2">
            <h1 className="flex-auto font-semibold">Admin Dashboard Buku Tamu</h1>
            <ul className="flex flex-auto">
                <li className="mr-5">
                    <Link>Guest List</Link>
                </li>
                <li className="mr-5">
                    <Link>Accept Guest</Link>
                </li>
            </ul>
            <h1 className="font-semibold">Admin</h1>
            <button className="px-1 ml-2 text-md font-semibold bg-red-600 rounded">Logout</button>
        </nav>
    )
}