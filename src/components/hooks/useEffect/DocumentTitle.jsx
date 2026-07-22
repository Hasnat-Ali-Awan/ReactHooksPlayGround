import { useState, useEffect } from "react";
import DemoCard from "../../common/DemoCard";

function DocumentTitle() {
    const [text, setText] = useState("Hello");

    useEffect(() => {
        document.title = text;
    }, [text]);

    return (
        <DemoCard title="Document Title">
            <input
                className="demo-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type a new title"
            />
            <p className="practice-hint">Look at the browser tab title</p>
        </DemoCard>
    );
}

export default DocumentTitle;
