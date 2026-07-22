import { useState, useCallback, memo } from "react";
import DemoCard from "../../common/DemoCard";

const ChildButton = memo(function ChildButton({ onClick }) {
    console.log("Child rendered");
    return (
        <button className="demo-btn" onClick={onClick}>
            Child Button
        </button>
    );
});

function ClickTracker() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const handleClick = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    return (
        <DemoCard title="Click Tracker">
            <p>Count</p>
            <div className="demo-value">{count}</div>
            <ChildButton onClick={handleClick} />
            <input
                className="demo-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type here (child should not re-render)"
            />
            <p className="practice-hint">Open console to see child renders</p>
        </DemoCard>
    );
}

export default ClickTracker;
