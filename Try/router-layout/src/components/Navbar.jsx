import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex bg-slate-700 w-screen h-16 items-center px-8 text-white">
      <Link to={"/"} className="flex-1 text-xl font-bold">
        <h1>Website</h1>
      </Link>
      <ul className="flex flex-1">
        <Link to={""} className="mr-4 hover:border-b-2">
          <li>Home</li>
        </Link>
        <Link to={"/about"} className="mr-4 hover:border-b-2">
          <li>About</li>
        </Link>
        <Link to={"/blog"} className="mr-4 hover:border-b-2">
          <li>Blog</li>
        </Link>
      </ul>
      <p className="flex-none ml-6">Kayla</p>
    </nav>
  );
}
