import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    return (
        <div className="flex flex-col">
            <Navbar/>

            <main className="p-4 bg-slate-300">
                <Outlet/>
            </main>

            <Footer/>
        </div>
    )
}