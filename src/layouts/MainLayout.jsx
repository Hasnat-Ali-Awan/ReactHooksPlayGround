import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import "./MainLayout.css";

function MainLayout({ children }) {
    const [search, setSearch] = useState("");

    return (
        <div className="app-shell">
            <Navbar search={search} setSearch={setSearch} />

            <div className="layout">
                <Sidebar search={search} />

                <main className="content">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default MainLayout;
