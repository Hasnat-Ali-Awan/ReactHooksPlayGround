import { useFormStatus } from "react-dom";
import DemoCard from "../../common/DemoCard";

function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <button className="demo-btn" disabled={pending}>
            {pending ? "Saving..." : "Save"}
        </button>
    );
}

async function fakeSave() {
    await new Promise((r) => setTimeout(r, 1000));
}

function SubmitButtonDemo() {
    return (
        <DemoCard title="Form Status">
            <form action={fakeSave} className="demo-form">
                <input className="demo-input" name="note" placeholder="Write a note" />
                <SubmitBtn />
            </form>
        </DemoCard>
    );
}

export default SubmitButtonDemo;
