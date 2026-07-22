import { useRef, useImperativeHandle, forwardRef } from "react";
import DemoCard from "../../common/DemoCard";

const FancyInput = forwardRef(function FancyInput(props, ref) {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus() {
            inputRef.current.focus();
        },
        clear() {
            inputRef.current.value = "";
        },
    }));

    return <input className="demo-input" ref={inputRef} placeholder="Fancy input" />;
});

function FancyInputDemo() {
    const inputRef = useRef(null);

    return (
        <DemoCard title="Fancy Input">
            <FancyInput ref={inputRef} />
            <div className="demo-row">
                <button className="demo-btn" onClick={() => inputRef.current.focus()}>
                    Focus
                </button>
                <button className="demo-btn demo-btn--ghost" onClick={() => inputRef.current.clear()}>
                    Clear
                </button>
            </div>
        </DemoCard>
    );
}

export default FancyInputDemo;
