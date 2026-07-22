import { useState, useDeferredValue, memo } from "react";
import DemoCard from "../../common/DemoCard";

const SlowList = memo(function SlowList({ text }) {
    const items = [];
    for (let i = 0; i < 2500; i++) {
        items.push(<div key={i}>{text}</div>);
    }
    return <div className="demo-scroll">{items}</div>;
});

function DeferredSearch() {
    const [text, setText] = useState("");
    const deferredText = useDeferredValue(text);

    return (
        <DemoCard title="Deferred Search">
            <input
                className="demo-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type fast..."
            />
            <p className="practice-hint">Input updates now, list updates a bit later</p>
            <SlowList text={deferredText} />
        </DemoCard>
    );
}

export default DeferredSearch;
