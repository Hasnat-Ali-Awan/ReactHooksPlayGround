import { useState } from "react";
import DemoCard from "../../common/DemoCard";
import "./Counter.css";

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

            <p>Current Count: {count}</p>

            <div className="counter-buttons">

                <button
                    className="counter-button"
                    onClick={() => increase()}
                >
                    +1
                </button>

                <button
                    className="counter-button"
                    onClick={() => increase(5)}
                >
                    +5
                </button>

                <button
                    className="counter-button"
                    onClick={() => decrease()}>
                    -1
                </button>

                <button
                    className="counter-button"
                    onClick={() => decrease(5)}>
                    -5
                </button>

                <button
                    className="counter-button reset-button"
                    onClick={reset}>
                    Reset
                </button>

            </div>

        </DemoCard>
    );
}

export default Counter;