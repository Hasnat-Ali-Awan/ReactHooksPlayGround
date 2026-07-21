import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import "./MainLayout.css";

function MainLayout({ children }) {
    return (
        <>
            <Navbar />

            <div className="layout">
                <Sidebar />

                <main className="content">
                    {children}
                </main>
            </div>
        </>
    );
}

export default MainLayout;