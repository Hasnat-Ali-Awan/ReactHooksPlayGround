import { useState, useDebugValue } from "react";
import DemoCard from "../../common/DemoCard";

function useFriendStatus(friendName) {
    const [isOnline, setIsOnline] = useState(false);
    useDebugValue(isOnline ? `${friendName} Online` : `${friendName} Offline`);
    return [isOnline, setIsOnline];
}

function FriendStatus() {
    const [isOnline, setIsOnline] = useFriendStatus("Alex");

    return (
        <DemoCard title="Friend Status">
            <span className={`demo-status ${isOnline ? "" : "is-off"}`}>
                {isOnline ? "Online" : "Offline"}
            </span>
            <button className="demo-btn" onClick={() => setIsOnline(!isOnline)}>
                Toggle Status
            </button>
            <p className="practice-hint">Open React DevTools to see useDebugValue</p>
        </DemoCard>
    );
}

export default FriendStatus;
