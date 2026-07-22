import { useActionState } from "react";
import DemoCard from "../../common/DemoCard";

async function submitName(prevState, formData) {
    const name = formData.get("name");
    await new Promise((r) => setTimeout(r, 800));

    if (!name) {
        return { message: "Name is required", ok: false };
    }

    return { message: `Hello, ${name}!`, ok: true };
}

function NameForm() {
    const [state, formAction, isPending] = useActionState(submitName, {
        message: "",
        ok: false,
    });

    return (
        <DemoCard title="Name Form">
            <form action={formAction} className="demo-form">
                <input className="demo-input" name="name" placeholder="Your name" />
                <button className="demo-btn" disabled={isPending}>
                    {isPending ? "Submitting..." : "Submit"}
                </button>
            </form>
            {state.message && (
                <span className={`demo-status ${state.ok ? "" : "is-off"}`}>
                    {state.message}
                </span>
            )}
        </DemoCard>
    );
}

export default NameForm;
