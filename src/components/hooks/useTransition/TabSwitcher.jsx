import { useState, useTransition } from "react";
import DemoCard from "../../common/DemoCard";

const tabs = {
    home: "Home content",
    posts: Array.from({ length: 5000 }, (_, i) => `Post #${i + 1}`),
    about: "About content",
};

function TabSwitcher() {
    const [tab, setTab] = useState("home");
    const [isPending, startTransition] = useTransition();

    function changeTab(next) {
        startTransition(() => {
            setTab(next);
        });
    }

    return (
        <DemoCard title="Tab Switcher">
            <div className="demo-row">
                <button className="demo-btn" onClick={() => changeTab("home")}>Home</button>
                <button className="demo-btn" onClick={() => changeTab("posts")}>Posts</button>
                <button className="demo-btn" onClick={() => changeTab("about")}>About</button>
            </div>

            {isPending && <p className="practice-hint">Loading...</p>}

            <div className="demo-scroll">
                {Array.isArray(tabs[tab])
                    ? tabs[tab].map((item) => <div key={item}>{item}</div>)
                    : <p>{tabs[tab]}</p>}
            </div>
        </DemoCard>
    );
}

export default TabSwitcher;
