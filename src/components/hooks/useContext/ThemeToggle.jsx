import DemoCard from "../../common/DemoCard";
import { ThemeProvider, useTheme } from "../../../context/ThemeContext";

function ThemeBox() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className={`demo-panel ${isDark ? "" : ""}`} style={{
            background: isDark ? "#0f172a" : "#f8fafc",
            color: isDark ? "#f8fafc" : "#0f172a",
            borderColor: isDark ? "#334155" : "#cbd5e1",
        }}>
            <p style={{ marginBottom: 12 }}>Current theme: <strong>{theme}</strong></p>
            <button className="demo-btn" onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
}

function ThemeToggle() {
    return (
        <DemoCard title="Theme Context">
            <ThemeProvider>
                <ThemeBox />
            </ThemeProvider>
        </DemoCard>
    );
}

export default ThemeToggle;
