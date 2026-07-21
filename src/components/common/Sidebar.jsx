import { NavLink } from "react-router-dom";
import hooksData from "../../data/hooksData";
import "./Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">



            {hooksData.map((section) => (
                <section
                    key={section.category}
                    className="sidebar-section"
                >
                    <h3 className="section-title">
                        {section.category}
                    </h3>

                    <ul className="sidebar-list">

                        {section.hooks.map((hook) => (
                            <li key={hook.name}>
                                <NavLink
                                    to={hook.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "sidebar-link active"
                                            : "sidebar-link"
                                    }
                                >
                                    {hook.name}
                                </NavLink>
                            </li>
                        ))}

                    </ul>
                </section>
            ))}

        </aside>
    );
}

export default Sidebar;