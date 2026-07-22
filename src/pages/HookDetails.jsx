import { useLocation } from "react-router-dom";
import hooksData from "../data/hooksData";
import hookExplanations from "../data/hookExplanations";
import HookExplanation from "../components/common/HookExplanation";
import "./HookDetails.css";

import UseStateDemo from "../components/hooks/useState";
import UseEffectDemo from "../components/hooks/useEffect";
import UseRefDemo from "../components/hooks/useRef";
import UseContextDemo from "../components/hooks/useContext";
import UseReducerDemo from "../components/hooks/useReducer";
import UseMemoDemo from "../components/hooks/useMemo";
import UseCallbackDemo from "../components/hooks/useCallback";
import UseLayoutEffectDemo from "../components/hooks/useLayoutEffect";
import UseImperativeHandleDemo from "../components/hooks/useImperativeHandle";
import UseIdDemo from "../components/hooks/useId";
import UseSyncExternalStoreDemo from "../components/hooks/useSyncExternalStore";
import UseInsertionEffectDemo from "../components/hooks/useInsertionEffect";
import UseDebugValueDemo from "../components/hooks/useDebugValue";
import UseTransitionDemo from "../components/hooks/useTransition";
import UseDeferredValueDemo from "../components/hooks/useDeferredValue";
import UseActionStateDemo from "../components/hooks/useActionState";
import UseOptimisticDemo from "../components/hooks/useOptimistic";
import UseFormStatusDemo from "../components/hooks/useFormStatus";
import UseDemo from "../components/hooks/use";
import UseCounterDemo from "../components/hooks/useCounter";
import UseFetchDemo from "../components/hooks/useFetch";
import UseToggleDemo from "../components/hooks/useToggle";
import UseLocalStorageDemo from "../components/hooks/useLocalStorage";
import UseWindowSizeDemo from "../components/hooks/useWindowSize";

const demos = {
    useState: UseStateDemo,
    useEffect: UseEffectDemo,
    useRef: UseRefDemo,
    useContext: UseContextDemo,
    useReducer: UseReducerDemo,
    useMemo: UseMemoDemo,
    useCallback: UseCallbackDemo,
    useLayoutEffect: UseLayoutEffectDemo,
    useImperativeHandle: UseImperativeHandleDemo,
    useId: UseIdDemo,
    useSyncExternalStore: UseSyncExternalStoreDemo,
    useInsertionEffect: UseInsertionEffectDemo,
    useDebugValue: UseDebugValueDemo,
    useTransition: UseTransitionDemo,
    useDeferredValue: UseDeferredValueDemo,
    useActionState: UseActionStateDemo,
    useOptimistic: UseOptimisticDemo,
    useFormStatus: UseFormStatusDemo,
    use: UseDemo,
    useCounter: UseCounterDemo,
    useFetch: UseFetchDemo,
    useToggle: UseToggleDemo,
    useLocalStorage: UseLocalStorageDemo,
    useWindowSize: UseWindowSizeDemo,
};

function HookDetails() {
    const location = useLocation();

    const hook = hooksData
        .flatMap((section) => section.hooks)
        .find((item) => item.path === location.pathname);

    const Demo = demos[hook?.name];
    const explanation = hookExplanations[hook?.name];

    return (
        <section className="hook-details">
            <header className="hook-details__header">
                <span className="hook-details__eyebrow">React Hook</span>
                <h1 className="hook-details__title">{hook?.name}</h1>
                <p className="hook-details__description">{hook?.description}</p>
            </header>

            <div className="demo-grid">
                {Demo ? <Demo /> : <p>Demo coming soon...</p>}
            </div>

            <HookExplanation name={hook?.name} info={explanation} />
        </section>
    );
}

export default HookDetails;
