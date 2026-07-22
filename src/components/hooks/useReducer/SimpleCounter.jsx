import { useReducer } from "react";
import DemoCard from "../../common/DemoCard";

function reducer(state, action) {
    if (action.type === "inc") return state + 1;
    if (action.type === "dec") return state - 1;
    if (action.type === "reset") return 0;
    return state;
}

function SimpleCounter() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <DemoCard title="Simple Counter">
            <p>Count</p>
            <div className="demo-value">{count}</div>
            <div className="demo-row">
                <button className="demo-btn" onClick={() => dispatch({ type: "inc" })}>+</button>
                <button className="demo-btn" onClick={() => dispatch({ type: "dec" })}>-</button>
                <button className="demo-btn demo-btn--danger" onClick={() => dispatch({ type: "reset" })}>
                    Reset
                </button>
            </div>
        </DemoCard>
    );
}

export default SimpleCounter;
