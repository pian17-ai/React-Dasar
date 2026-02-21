import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex px-4 py-2 bg-slate-700 text-white">
            <Link to={"/"} className="flex-auto">
                <h1 className="text-xl font-bold">Website</h1>
            </Link>
            <ul className="flex flex-auto">
                <Link to={"/"} className="px-2 py-1 hover:bg-slate-800 rounded">
                    <li>Home</li>
                </Link>
                <Link to={"/about"} className="px-2 py-1 hover:bg-slate-800 rounded">
                    <li>About</li>
                </Link>
                <Link to={"/blog"} className="px-2 py-1 hover:bg-slate-800 rounded">
                    <li>Blog</li>
                </Link>
            </ul>
            <h1 className="font-semibold">Kella</h1>
        </nav>
    )
}