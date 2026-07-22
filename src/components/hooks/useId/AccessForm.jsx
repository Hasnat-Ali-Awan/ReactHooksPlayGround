import { useId } from "react";
import DemoCard from "../../common/DemoCard";

function AccessForm() {
    const nameId = useId();
    const emailId = useId();

    return (
        <DemoCard title="Accessible Form">
            <div className="demo-form">
                <div className="demo-form-field">
                    <label htmlFor={nameId}>Name</label>
                    <input className="demo-input" id={nameId} placeholder="Jane Doe" />
                </div>
                <div className="demo-form-field">
                    <label htmlFor={emailId}>Email</label>
                    <input className="demo-input" id={emailId} placeholder="jane@email.com" />
                </div>
            </div>
        </DemoCard>
    );
}

export default AccessForm;
