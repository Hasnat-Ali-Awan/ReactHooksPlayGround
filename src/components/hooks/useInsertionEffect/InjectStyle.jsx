import { useInsertionEffect, useState } from "react";
import DemoCard from "../../common/DemoCard";

function InjectStyle() {
    const [color, setColor] = useState("tomato");

    useInsertionEffect(() => {
        const style = document.createElement("style");
        style.textContent = `.demo-colored-box { background: ${color}; }`;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, [color]);

    return (
        <DemoCard title="Inject Style">
            <div className="demo-colored-box demo-panel">
                Colored box
            </div>
            <div className="demo-row">
                <button className="demo-btn" onClick={() => setColor("tomato")}>Red</button>
                <button className="demo-btn" onClick={() => setColor("seagreen")}>Green</button>
                <button className="demo-btn" onClick={() => setColor("steelblue")}>Blue</button>
            </div>
        </DemoCard>
    );
}

export default InjectStyle;
