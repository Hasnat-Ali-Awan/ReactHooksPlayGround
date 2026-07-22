import { useState } from "react";
import DemoCard from "../../common/DemoCard";

function Counter() {
    const [count, setCount] = useState(0);

    function increase(value = 1) {
        setCount((prevCount) => prevCount + value);
    }

    function decrease(value = 1) {
        setCount((prevCount) => Math.max(prevCount - value, 0));
    }

    function reset() {
        setCount(0);
    }

    return (
        <DemoCard title="Counter Example">
            <p>Current Count</p>
            <div className="demo-value">{count}</div>

            <div className="demo-row">
                <button className="demo-btn" onClick={() => increase()}>+1</button>
                <button className="demo-btn" onClick={() => increase(5)}>+5</button>
                <button className="demo-btn" onClick={() => decrease()}>-1</button>
                <button className="demo-btn" onClick={() => decrease(5)}>-5</button>
                <button className="demo-btn demo-btn--danger" onClick={reset}>
                    Reset
                </button>
            </div>
        </DemoCard>
    );
}

export default Counter;
