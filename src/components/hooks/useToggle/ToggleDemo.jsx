import useToggle from "../../../hooks/useToggle";
import DemoCard from "../../common/DemoCard";

function ToggleDemo() {
    const [isOn, toggle] = useToggle(false);

    return (
        <DemoCard title="useToggle Demo">
            <span className={`demo-status ${isOn ? "" : "is-off"}`}>
                {isOn ? "ON" : "OFF"}
            </span>
            <button className="demo-btn" onClick={toggle}>
                Toggle
            </button>
        </DemoCard>
    );
}

export default ToggleDemo;
