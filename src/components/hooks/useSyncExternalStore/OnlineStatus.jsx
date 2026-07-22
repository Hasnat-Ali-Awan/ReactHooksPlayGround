import { useSyncExternalStore } from "react";
import DemoCard from "../../common/DemoCard";

function subscribe(callback) {
    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);
    return () => {
        window.removeEventListener("online", callback);
        window.removeEventListener("offline", callback);
    };
}

function getSnapshot() {
    return navigator.onLine;
}

function OnlineStatus() {
    const isOnline = useSyncExternalStore(subscribe, getSnapshot);

    return (
        <DemoCard title="Online Status">
            <span className={`demo-status ${isOnline ? "" : "is-off"}`}>
                {isOnline ? "You are online" : "You are offline"}
            </span>
        </DemoCard>
    );
}

export default OnlineStatus;
