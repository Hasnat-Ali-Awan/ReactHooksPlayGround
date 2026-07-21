import hooksData from "../../data/hooksData";
import "./Sidebar.css";

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
                                {hook.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    );
}

export default Sidebar;