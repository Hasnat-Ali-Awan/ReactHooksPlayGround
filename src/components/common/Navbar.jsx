import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Search, Sun } from "lucide-react";
import hooksData from "../../data/hooksData";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";
import reactLogo from "../../assets/react.svg";

function Navbar({ search, setSearch }) {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const boxRef = useRef(null);

    const results = useMemo(() => {
        const query = search.trim().toLowerCase();
        if (!query) return [];

        return hooksData
            .flatMap((section) =>
                section.hooks.map((hook) => ({
                    ...hook,
                    category: section.category,
                }))
            )
            .filter(
                (hook) =>
                    hook.name.toLowerCase().includes(query) ||
                    hook.description.toLowerCase().includes(query) ||
                    hook.category.toLowerCase().includes(query)
            )
            .slice(0, 8);
    }, [search]);

    useEffect(() => {
        function handleClick(event) {
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    function handleSelect(path) {
        navigate(path);
        setSearch("");
        setOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={reactLogo} alt="React Logo" className="logo" />
                <h2>React Hooks Playground</h2>
            </div>

            <div className="navbar-center">
                <div className="search-box" ref={boxRef}>
                    <Search className="search-icon" size={18} />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setOpen(true);
                        }}
                        onFocus={() => setOpen(true)}
                        placeholder="Search hooks..."
                        aria-label="Search hooks"
                    />

                    {open && search.trim() && (
                        <div className="search-results">
                            {results.length === 0 ? (
                                <p className="search-empty">No hooks found</p>
                            ) : (
                                results.map((hook) => (
                                    <button
                                        key={hook.path}
                                        type="button"
                                        className="search-result"
                                        onClick={() => handleSelect(hook.path)}
                                    >
                                        <span className="search-result__name">{hook.name}</span>
                                        <span className="search-result__meta">
                                            {hook.category} · {hook.description}
                                        </span>
                                    </button>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="navbar-right">
                <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <span className="version">v1.0</span>
            </div>
        </nav>
    );
}

export default Navbar;
