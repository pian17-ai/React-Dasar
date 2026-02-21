import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen0">
            <Navbar/>

            <main className="p-6 bg-slate-200">
                <Outlet/>
            </main>

            <Footer/>
        </div>
    )
}