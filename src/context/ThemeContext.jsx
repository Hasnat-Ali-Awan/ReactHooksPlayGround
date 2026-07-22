import { createContext, useContext, useLayoutEffect, useState } from "react";

const ThemeContext = createContext(null);

function getInitialTheme() {
    const saved = localStorage.getItem("app-theme");
    if (saved === "light" || saved === "dark") return saved;
    return "dark";
}

export function ThemeProvider({
    children,
    scoped = false,
    initialTheme = "light",
}) {
    const [theme, setTheme] = useState(() =>
        scoped ? initialTheme : getInitialTheme()
    );

    useLayoutEffect(() => {
        if (scoped) return;

        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("app-theme", theme);
    }, [theme, scoped]);

    function toggleTheme() {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return context;
}
