import "./Navbar.css";
import reactLogo from "../../assets/react.svg"
import { Moon, Search } from "lucide-react";
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={reactLogo} alt="React Logo" className="logo" />
                <h2>React Hooks Playground</h2>
            </div>

            <div className="navbar-center">
                <div className="search-box">
                    <Search className="search-icon" size={18} />
                    <input
                        type="text"
                        placeholder="Search hooks..."
                    />
                </div>
            </div>

            <div className="navbar-right">
                <button><Moon size={18} /></button>
                <span className="version">v1.0</span>
            </div>
        </nav>
    );
}

export default Navbar;