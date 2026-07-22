import useWindowSize from "../../../hooks/useWindowSize";
import DemoCard from "../../common/DemoCard";

function SizeDisplay() {
    const { width, height } = useWindowSize();

    return (
        <DemoCard title="useWindowSize Demo">
            <div className="demo-row">
                <div className="demo-value">{width}px</div>
                <div className="demo-value">{height}px</div>
            </div>
            <p className="practice-hint">Resize the browser window</p>
        </DemoCard>
    );
}

export default SizeDisplay;
