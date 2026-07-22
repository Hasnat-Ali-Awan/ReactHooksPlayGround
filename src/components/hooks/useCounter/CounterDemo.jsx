import useCounter from "../../../hooks/useCounter";
import DemoCard from "../../common/DemoCard";

function CounterDemo() {
    const { count, increase, decrease, reset } = useCounter(0);

    return (
        <DemoCard title="useCounter Demo">
            <p>Count</p>
            <div className="demo-value">{count}</div>
            <div className="demo-row">
                <button className="demo-btn" onClick={increase}>+</button>
                <button className="demo-btn" onClick={decrease}>-</button>
                <button className="demo-btn demo-btn--danger" onClick={reset}>Reset</button>
            </div>
        </DemoCard>
    );
}

export default CounterDemo;
