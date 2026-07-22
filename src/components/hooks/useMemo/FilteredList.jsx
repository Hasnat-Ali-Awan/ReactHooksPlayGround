import DemoCard from "../../common/DemoCard";

// TODO: Practice here!
function Practice() {
    return (
        <DemoCard title="Your Turn: Filtered List">
            <div className="practice-box">
                <p className="practice-hint">
                    Use <code>useMemo</code> to filter a list without recalculating every render
                </p>
            </div>
        </DemoCard>
    );
}

export default Practice;
