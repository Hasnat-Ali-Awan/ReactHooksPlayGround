import { useState, useMemo } from "react";
import DemoCard from "../../common/DemoCard";

function slowDouble(num) {
    let total = 0;
    for (let i = 0; i < 1_000_000; i++) {
        total += 1;
    }
    return num * 2 + total * 0;
}

function SlowCalc() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const doubled = useMemo(() => slowDouble(number), [number]);

    return (
        <DemoCard title="Slow Calculation">
            <input
                className="demo-input"
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <p>Doubled</p>
            <div className="demo-value">{doubled}</div>
            <button className="demo-btn demo-btn--ghost" onClick={() => setDark(!dark)}>
                Theme: {dark ? "Dark" : "Light"}
            </button>
            <p className="practice-hint">Theme toggle does NOT re-run the slow calc</p>
        </DemoCard>
    );
}

export default SlowCalc;
