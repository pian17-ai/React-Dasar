import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      {/* Navbar */}
      <header className="w-full flex justify-center pt-6">
        <nav className="bg-white rounded-full px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl shadow-sm">
          <Link to={"/"} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#6d35ff] flex items-center justify-center text-white font-bold">
              P
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to={"/features"} className="hover:text-[#7c3aed] transition">
              Features
            </Link>

            <Link to={"/learn"} className="hover:text-[#7c3aed] transition">
              Learn
            </Link>

            <Link to={"/explore"} className="hover:text-[#7c3aed] transition">
              Explore
            </Link>

            <Link to={"/support"} className="hover:text-[#7c3aed] transition">
              Support
            </Link>
          </div>

          <div className="flex items-center gap-4">

            <Link className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-5 py-2 rounded-full text-sm transition">
              Login
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
