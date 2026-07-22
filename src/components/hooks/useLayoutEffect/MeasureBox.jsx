import { useState, useRef, useLayoutEffect } from "react";
import DemoCard from "../../common/DemoCard";

function MeasureBox() {
    const boxRef = useRef(null);
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        setWidth(boxRef.current.offsetWidth);
    }, []);

    return (
        <DemoCard title="Measure Box">
            <div ref={boxRef} className="demo-panel">
                Box width: <strong>{width}px</strong>
            </div>
        </DemoCard>
    );
}

export default MeasureBox;
