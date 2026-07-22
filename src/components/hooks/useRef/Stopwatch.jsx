import DemoCard from "../../common/DemoCard";

// TODO: Practice here!
function Practice() {
    return (
        <DemoCard title="Your Turn: Stopwatch">
            <div className="practice-box">
                <p className="practice-hint">
                    Use <code>useRef</code> to store a timer id without causing re-renders
                </p>
            </div>
        </DemoCard>
    );
}

export default Practice;
