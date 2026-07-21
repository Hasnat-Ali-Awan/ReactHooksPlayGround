import { useLocation } from "react-router-dom";
import hooksData from "../data/hooksData";
import UseStateDemo from "../components/hooks/useState";

function HookDetails() {
    const location = useLocation();

    const hook = hooksData
        .flatMap((section) => section.hooks)
        .find((item) => item.path === location.pathname);

    return (
        <>
            <h1>{hook?.name}</h1>

            <p>{hook?.description}</p>

            <hr />

            {hook?.name === "useState" && <UseStateDemo />}
        </>
    );
}

export default HookDetails;