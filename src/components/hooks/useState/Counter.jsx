import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increase(value = 1) {
        setCount((preCount) => preCount + value);
    }

    function decrease(value = 1) {

        setCount((prevCount) => Math.max(prevCount - value, 0));

    }

    function reset() {
        setCount(0);
    }


    return (
        <div>
            <h2>Counter Example</h2>

            <p>Current Count: {count}</p>

            <button onClick={() => increase()}>+1</button>
            <button onClick={() => increase(5)}>+5</button>
            <button onClick={() => decrease()}>-1</button>
            <button onClick={() => decrease(5)}>-5</button>


            <button onClick={reset}>Reset</button>

        </div>
    );
}

export default Counter;