import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import hooksData from "../../data/hooksData";
import "./Sidebar.css";

function Sidebar({ search = "" }) {
    const [openSections, setOpenSections] = useState(() =>
        Object.fromEntries(hooksData.map((section) => [section.category, true]))
    );

    const query = search.trim().toLowerCase();

    useEffect(() => {
        if (!query) return;

        setOpenSections((prev) => {
            const next = { ...prev };
            hooksData.forEach((section) => {
                const hasMatch = section.hooks.some(
                    (hook) =>
                        hook.name.toLowerCase().includes(query) ||
                        hook.description.toLowerCase().includes(query)
                );
                if (hasMatch) next[section.category] = true;
            });
            return next;
        });
    }, [query]);

    function toggleSection(category) {
        setOpenSections((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    }

    return (
        <aside className="sidebar">
            {hooksData.map((section) => {
                const hooks = query
                    ? section.hooks.filter(
                          (hook) =>
                              hook.name.toLowerCase().includes(query) ||
                              hook.description.toLowerCase().includes(query) ||
                              section.category.toLowerCase().includes(query)
                      )
                    : section.hooks;

                if (query && hooks.length === 0) return null;

                const isOpen = openSections[section.category];

                return (
                    <section key={section.category} className="sidebar-section">
                        <button
                            type="button"
                            className={`section-title ${isOpen ? "is-open" : ""}`}
                            onClick={() => toggleSection(section.category)}
                            aria-expanded={isOpen}
                        >
                            <span>{section.category}</span>
                            <ChevronDown size={16} className="section-chevron" />
                        </button>

                        {isOpen && (
                            <ul className="sidebar-list">
                                {hooks.map((hook) => (
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
                        )}
                    </section>
                );
            })}
        </aside>
    );
}

export default Sidebar;
