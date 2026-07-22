import { useRef } from "react";
import DemoCard from "../../common/DemoCard";

function FocusInput() {
    const inputRef = useRef(null);

    function focus() {
        inputRef.current.focus();
    }

    return (
        <DemoCard title="Focus Input">
            <input className="demo-input" ref={inputRef} placeholder="Click the button" />
            <button className="demo-btn" onClick={focus}>
                Focus Input
            </button>
        </DemoCard>
    );
}

export default FocusInput;
