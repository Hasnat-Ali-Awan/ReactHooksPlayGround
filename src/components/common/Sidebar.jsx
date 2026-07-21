import hooksData from "../../data/hooksData";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">📚 React Hooks</h2>

            {hooksData.map((section) => (
                <div key={section.category} className="sidebar-section">
                    <h3>{section.category}</h3>

                    <ul>
                        {section.hooks.map((hook) => (
                            <li key={hook.name}>
                                <NavLink
                                    to={hook.path}
                                    className="sidebar-link">
                                    {hook.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    );
}

export default Sidebar;