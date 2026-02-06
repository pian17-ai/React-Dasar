import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function AppLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <div className="min-h-screenn flex bg-gray-100">
                <Header />
                {/* Sidebar menu */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* Main page */}
                <div className="flex-l flex-col">
                    <header setSidebarOpen={setSidebarOpen} />
                    <main className="flex-l p-4 md:p-1">{children}</main>
                    <Footer />
                </div>
            </div>
        </>
    );
}
