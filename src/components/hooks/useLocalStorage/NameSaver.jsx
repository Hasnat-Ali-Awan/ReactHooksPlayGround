import useLocalStorage from "../../../hooks/useLocalStorage";
import DemoCard from "../../common/DemoCard";

function NameSaver() {
    const [name, setName] = useLocalStorage("demo-name", "");

    return (
        <DemoCard title="useLocalStorage Demo">
            <input
                className="demo-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name"
            />
            <p>Saved name: <strong>{name || "(empty)"}</strong></p>
            <p className="practice-hint">Refresh the page — name stays!</p>
        </DemoCard>
    );
}

export default NameSaver;
