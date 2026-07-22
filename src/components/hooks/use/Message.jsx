import { use, Suspense } from "react";
import DemoCard from "../../common/DemoCard";

function fetchMessage() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello from a Promise!"), 1000);
    });
}

const messagePromise = fetchMessage();

function MessageText() {
    const message = use(messagePromise);
    return <p className="demo-value" style={{ fontSize: "1rem" }}>{message}</p>;
}

function Message() {
    return (
        <DemoCard title="use() with Promise">
            <Suspense fallback={<p className="practice-hint">Loading...</p>}>
                <MessageText />
            </Suspense>
        </DemoCard>
    );
}

export default Message;
