import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex bg-slate-600 text-white px-6 py-4">
      <Link to={"/"} className="flex-auto">
        <h1 className="text-xl font-bold">Website</h1>
      </Link>
      <ul className="flex flex-auto">
        <Link to={"/"}>
          <li className="mr-4 hover:bg-slate-700 rounded px-2 py-1">Home</li>
        </Link>
        <Link to={"/about"}>
          <li className="mr-4 hover:bg-slate-700 rounded px-2 py-1">About</li>
        </Link>
        <Link to={"/blog"}>
          <li className="mr-4 hover:bg-slate-700 rounded px-2 py-1">Blog</li>
        </Link>
      </ul>
      <h1 className="flex-none text-xl">Kella</h1>
    </nav>
  );
}
