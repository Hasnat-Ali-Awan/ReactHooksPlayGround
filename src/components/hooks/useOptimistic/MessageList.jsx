import { useState, useOptimistic } from "react";
import DemoCard from "../../common/DemoCard";

function MessageList() {
    const [messages, setMessages] = useState(["Hi there!"]);
    const [optimisticMessages, addOptimistic] = useOptimistic(
        messages,
        (current, newMessage) => [...current, newMessage]
    );

    async function sendMessage(formData) {
        const text = formData.get("text");
        if (!text) return;

        addOptimistic(text);
        await new Promise((r) => setTimeout(r, 1000));
        setMessages((prev) => [...prev, text]);
    }

    return (
        <DemoCard title="Optimistic Messages">
            <ul className="demo-list">
                {optimisticMessages.map((msg, i) => (
                    <li key={i}>{msg}</li>
                ))}
            </ul>

            <form action={sendMessage} className="demo-row">
                <input className="demo-input" name="text" placeholder="Type a message" />
                <button className="demo-btn">Send</button>
            </form>
        </DemoCard>
    );
}

export default MessageList;
