const hookExplanations = {
    useState: {
        purpose:
            "useState lets a component remember a value between renders. When that value changes, React updates the screen.",
        whyUse:
            "Use it for anything that can change in the UI: counters, form inputs, toggles, liked/unliked, open/closed menus, and more.",
        howItWorks: [
            "You call useState(initialValue) and get back two things: the current value, and a setter function.",
            "When you call the setter, React re-renders the component with the new value.",
            "Never change state by editing the old value directly — always use the setter.",
        ],
        tips: [
            "If the next value depends on the previous one, use the function form: setCount(prev => prev + 1).",
            "Each useState call creates its own independent piece of state.",
        ],
        example: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`,
    },

    useEffect: {
        purpose:
            "useEffect runs code after React paints the screen. It is for side effects — things that happen outside the normal render.",
        whyUse:
            "Use it when you need to fetch data, update the document title, start a timer, or listen to window events.",
        howItWorks: [
            "The effect function runs after render.",
            "The dependency array controls when it re-runs. [] means run once. [value] means run when value changes.",
            "Return a cleanup function to stop timers or remove event listeners.",
        ],
        tips: [
            "Do not use useEffect for simple calculations — do those during render.",
            "Always clean up timers and listeners to avoid bugs and memory leaks.",
        ],
        example: `import { useState, useEffect } from "react";

function DocumentTitle() {
  const [text, setText] = useState("Hello");

  useEffect(() => {
    document.title = text;
  }, [text]);

  return (
    <input value={text} onChange={(e) => setText(e.target.value)} />
  );
}`,
    },

    useRef: {
        purpose:
            "useRef gives you a box that holds a value. Changing that value does NOT cause a re-render.",
        whyUse:
            "Use it to focus an input, store a timer id, or keep a value that should survive renders without updating the UI.",
        howItWorks: [
            "useRef(initialValue) returns an object like { current: initialValue }.",
            "You can read and write ref.current anytime.",
            "When you put a ref on a DOM element, React fills ref.current with that element.",
        ],
        tips: [
            "Use useState for values that should update the UI.",
            "Use useRef for values that should stay quiet in the background.",
        ],
        example: `import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  function focus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </>
  );
}`,
    },

    useContext: {
        purpose:
            "useContext lets child components read shared data without passing props through every level.",
        whyUse:
            "Use it for theme, language, current user, or any data many components need.",
        howItWorks: [
            "Create a context with createContext().",
            "Wrap part of your tree with Context.Provider and pass a value.",
            "Any child can call useContext(MyContext) to read that value.",
        ],
        tips: [
            "Do not put everything in context — only shared app-wide data.",
            "If the provider value changes often, children that use it will re-render.",
        ],
        example: `import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const { theme } = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}`,
    },

    useReducer: {
        purpose:
            "useReducer manages state with a reducer function. You send actions, and the reducer returns the next state.",
        whyUse:
            "Use it when state has many related updates (like a todo list) or when the next state depends on clear action types.",
        howItWorks: [
            "Write a reducer(state, action) that returns the new state.",
            "dispatch(action) sends an action to the reducer.",
            "React re-renders with the new state returned by the reducer.",
        ],
        tips: [
            "Keep action types simple: 'add', 'remove', 'reset'.",
            "If state is tiny and simple, useState is often enough.",
        ],
        example: `import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "inc") return state + 1;
  if (action.type === "dec") return state - 1;
  return state;
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
    </>
  );
}`,
    },

    useMemo: {
        purpose:
            "useMemo remembers the result of a calculation and only recalculates when its dependencies change.",
        whyUse:
            "Use it for slow work (filtering big lists, heavy math) so typing or other UI updates stay smooth.",
        howItWorks: [
            "useMemo(() => calculate(), [deps]) runs calculate only when deps change.",
            "On other renders, React returns the saved result.",
        ],
        tips: [
            "Do not wrap every calculation — only the expensive ones.",
            "If the calculation is cheap, normal render code is clearer.",
        ],
        example: `import { useMemo, useState } from "react";

function List({ items, query }) {
  const filtered = useMemo(() => {
    return items.filter((item) => item.includes(query));
  }, [items, query]);

  return filtered.map((item) => <div key={item}>{item}</div>);
}`,
    },

    useCallback: {
        purpose:
            "useCallback remembers a function so it keeps the same reference between renders (unless dependencies change).",
        whyUse:
            "Use it when you pass a function to a memoized child component and want to avoid extra re-renders.",
        howItWorks: [
            "useCallback(fn, [deps]) returns a stable function.",
            "The function is recreated only when deps change.",
        ],
        tips: [
            "Often used together with React.memo.",
            "If no child is memoized, useCallback may not help much.",
        ],
        example: `import { useCallback, useState, memo } from "react";

const Child = memo(function Child({ onClick }) {
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return <Child onClick={handleClick} />;
}`,
    },

    useLayoutEffect: {
        purpose:
            "useLayoutEffect runs before the browser paints. It is like useEffect, but earlier.",
        whyUse:
            "Use it when you must measure or change the DOM before the user sees anything (to avoid a visual flicker).",
        howItWorks: [
            "React updates the DOM.",
            "Then useLayoutEffect runs.",
            "Then the browser paints the screen.",
        ],
        tips: [
            "Prefer useEffect for most work — it feels smoother.",
            "Use useLayoutEffect only when flicker is a real problem.",
        ],
        example: `import { useLayoutEffect, useRef, useState } from "react";

function Box() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return <div ref={ref}>Width: {width}</div>;
}`,
    },

    useImperativeHandle: {
        purpose:
            "useImperativeHandle lets a child choose what a parent can do with its ref (like focus() or clear()).",
        whyUse:
            "Use it when a parent needs to call a few methods on a child, but should not touch the whole DOM node.",
        howItWorks: [
            "The child uses forwardRef and useImperativeHandle.",
            "You expose only the methods you want.",
            "The parent calls those methods through the ref.",
        ],
        tips: [
            "Prefer props and state when possible.",
            "This hook is for special cases like focus helpers or media controls.",
        ],
        example: `import { forwardRef, useImperativeHandle, useRef } from "react";

const FancyInput = forwardRef(function FancyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));

  return <input ref={inputRef} />;
});`,
    },

    useId: {
        purpose:
            "useId creates a unique id string that stays stable for that component.",
        whyUse:
            "Use it to connect a <label> with an <input> for accessibility, especially when you render many forms.",
        howItWorks: [
            "Call useId() to get an id.",
            "Put that id on the input and use the same value in htmlFor on the label.",
        ],
        tips: [
            "Do not use useId to create list keys — use your data ids for that.",
            "It works well with server rendering because ids stay consistent.",
        ],
        example: `import { useId } from "react";

function NameField() {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>Name</label>
      <input id={id} />
    </>
  );
}`,
    },

    useSyncExternalStore: {
        purpose:
            "useSyncExternalStore connects React to data that lives outside React (like browser APIs or external stores).",
        whyUse:
            "Use it for online/offline status, window size from an external source, or libraries with their own store.",
        howItWorks: [
            "You give it a subscribe function and a getSnapshot function.",
            "When the store changes, React re-renders with the new snapshot.",
        ],
        tips: [
            "getSnapshot should return a cached or primitive value when possible.",
            "This is the safe way to read external changing data in React.",
        ],
        example: `import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function Online() {
  const isOnline = useSyncExternalStore(subscribe, () => navigator.onLine);
  return <p>{isOnline ? "Online" : "Offline"}</p>;
}`,
    },

    useInsertionEffect: {
        purpose:
            "useInsertionEffect runs even earlier than useLayoutEffect. It is mainly for CSS-in-JS libraries.",
        whyUse:
            "Use it when you need to inject styles into the page before layout calculations happen.",
        howItWorks: [
            "It runs after DOM updates but before useLayoutEffect.",
            "That timing helps style libraries avoid layout flicker.",
        ],
        tips: [
            "Most apps never need this hook directly.",
            "Prefer normal CSS files or simple className styles in learning projects.",
        ],
        example: `import { useInsertionEffect } from "react";

function StyledBox({ color }) {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = \`.box { background: \${color}; }\`;
    document.head.appendChild(style);
    return () => style.remove();
  }, [color]);

  return <div className="box">Hello</div>;
}`,
    },

    useDebugValue: {
        purpose:
            "useDebugValue shows a custom label for your hook inside React DevTools.",
        whyUse:
            "Use it while building custom hooks so debugging is easier to read.",
        howItWorks: [
            "Call useDebugValue(value) inside a custom hook.",
            "DevTools shows that label next to your hook.",
        ],
        tips: [
            "It does not change your app UI — only DevTools.",
            "Great for hooks like useFriendStatus or useOnline.",
        ],
        example: `import { useState, useDebugValue } from "react";

function useOnline() {
  const [online, setOnline] = useState(true);
  useDebugValue(online ? "Online" : "Offline");
  return [online, setOnline];
}`,
    },

    useTransition: {
        purpose:
            "useTransition marks some state updates as non-urgent so urgent updates (like typing) stay fast.",
        whyUse:
            "Use it when a state change is heavy (switching tabs with big lists) and you do not want the UI to feel stuck.",
        howItWorks: [
            "startTransition(() => setState(...)) tells React this update can wait a bit.",
            "isPending becomes true while that transition is still working.",
        ],
        tips: [
            "Keep user input updates urgent (outside startTransition).",
            "Show a small loading message with isPending.",
        ],
        example: `import { useState, useTransition } from "react";

function Tabs() {
  const [tab, setTab] = useState("home");
  const [isPending, startTransition] = useTransition();

  function changeTab(next) {
    startTransition(() => setTab(next));
  }

  return (
    <>
      <button onClick={() => changeTab("posts")}>Posts</button>
      {isPending && <p>Loading...</p>}
      <p>{tab}</p>
    </>
  );
}`,
    },

    useDeferredValue: {
        purpose:
            "useDeferredValue gives you a slightly delayed version of a value so urgent UI can update first.",
        whyUse:
            "Use it when typing should feel instant, but a big list based on that text can update a moment later.",
        howItWorks: [
            "You keep the real value for the input.",
            "You pass the deferred value to the slow list.",
            "React may show the old list briefly while catching up.",
        ],
        tips: [
            "Very useful with large filtered lists.",
            "Similar goal to useTransition, different style of API.",
        ],
        example: `import { useState, useDeferredValue } from "react";

function Search({ items }) {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  const filtered = items.filter((item) => item.includes(deferredText));

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <List items={filtered} />
    </>
  );
}`,
    },

    useActionState: {
        purpose:
            "useActionState helps manage form actions: pending state, result message, and the form action function.",
        whyUse:
            "Use it for forms that submit data and need a loading state plus success/error feedback.",
        howItWorks: [
            "You pass an async action function.",
            "React gives you [state, formAction, isPending].",
            "Put formAction on the form's action prop.",
        ],
        tips: [
            "Great with React 19 form actions.",
            "Keep the action function focused: validate, then return a message/result.",
        ],
        example: `import { useActionState } from "react";

async function submit(prev, formData) {
  const name = formData.get("name");
  if (!name) return { message: "Name required" };
  return { message: \`Hello \${name}\` };
}

function Form() {
  const [state, formAction, isPending] = useActionState(submit, { message: "" });

  return (
    <form action={formAction}>
      <input name="name" />
      <button disabled={isPending}>Send</button>
      <p>{state.message}</p>
    </form>
  );
}`,
    },

    useOptimistic: {
        purpose:
            "useOptimistic shows a temporary 'already done' UI while the real server request is still running.",
        whyUse:
            "Use it for likes, sending messages, or any action where instant feedback feels better.",
        howItWorks: [
            "You keep the real state.",
            "addOptimistic(tempValue) updates the UI immediately.",
            "When the server finishes, real state replaces the temporary one.",
        ],
        tips: [
            "Makes apps feel faster.",
            "Be ready to handle errors if the server fails.",
        ],
        example: `import { useState, useOptimistic } from "react";

function Messages() {
  const [messages, setMessages] = useState(["Hi"]);
  const [optimistic, addOptimistic] = useOptimistic(
    messages,
    (current, next) => [...current, next]
  );

  async function send(formData) {
    const text = formData.get("text");
    addOptimistic(text);
    // await serverSave(text)
    setMessages((prev) => [...prev, text]);
  }

  return (
    <form action={send}>
      {optimistic.map((m) => <p key={m}>{m}</p>)}
      <input name="text" />
    </form>
  );
}`,
    },

    useFormStatus: {
        purpose:
            "useFormStatus tells a child component whether its parent form is currently submitting.",
        whyUse:
            "Use it to disable a submit button or show 'Saving...' without passing pending props manually.",
        howItWorks: [
            "Call useFormStatus() inside a component rendered inside a <form>.",
            "Read pending (and other status fields) from the result.",
        ],
        tips: [
            "It must be used in a child of the form, not in the same component that renders the form.",
            "Import it from 'react-dom'.",
        ],
        example: `import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? "Saving..." : "Save"}</button>;
}

function NoteForm() {
  return (
    <form action={saveNote}>
      <input name="note" />
      <SubmitButton />
    </form>
  );
}`,
    },

    use: {
        purpose:
            "use() can read the value of a Promise or a Context. With promises, it works with Suspense.",
        whyUse:
            "Use it when you want a simple way to wait for async data inside a component with a loading fallback.",
        howItWorks: [
            "If the promise is not ready, React shows the nearest Suspense fallback.",
            "When the promise resolves, the component renders with the value.",
        ],
        tips: [
            "Keep the promise stable (do not create a new promise every render).",
            "Wrap the component in <Suspense fallback={...}>.",
        ],
        example: `import { use, Suspense } from "react";

const messagePromise = Promise.resolve("Hello!");

function Message() {
  const message = use(messagePromise);
  return <p>{message}</p>;
}

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Message />
    </Suspense>
  );
}`,
    },

    useCounter: {
        purpose:
            "useCounter is a custom hook that packages counter logic (value + increase/decrease/reset) into one reusable tool.",
        whyUse:
            "Use it so many components can share the same counter behavior without copy-paste.",
        howItWorks: [
            "Custom hooks are normal functions whose names start with 'use'.",
            "Inside, they can call other hooks like useState.",
            "They return values and functions the component needs.",
        ],
        tips: [
            "Custom hooks share logic, not UI.",
            "Keep them small and focused on one job.",
        ],
        example: `import { useState } from "react";

function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);
  const reset = () => setCount(initial);
  return { count, increase, decrease, reset };
}

function Score() {
  const { count, increase } = useCounter(0);
  return <button onClick={increase}>{count}</button>;
}`,
    },

    useFetch: {
        purpose:
            "useFetch is a custom hook that loads data from an API and gives you data, loading, and error states.",
        whyUse:
            "Use it to avoid rewriting the same fetch + loading + error pattern in every component.",
        howItWorks: [
            "It starts loading when the url is set.",
            "It stores the response in state.",
            "It cleans up so late responses do not update an old screen.",
        ],
        tips: [
            "Always handle loading and error in the UI.",
            "Pass a stable url string as the dependency.",
        ],
        example: `function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (!ignore) {
          setData(json);
          setLoading(false);
        }
      });
    return () => { ignore = true; };
  }, [url]);

  return { data, loading };
}`,
    },

    useToggle: {
        purpose:
            "useToggle is a tiny custom hook for true/false values with a ready-made toggle function.",
        whyUse:
            "Use it for dark mode switches, show/hide panels, or any on/off UI.",
        howItWorks: [
            "It stores a boolean with useState.",
            "toggle flips true to false and false to true.",
        ],
        tips: [
            "Returns [value, toggle] so it feels like useState.",
            "Perfect first custom hook for beginners.",
        ],
        example: `function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
}

function Switch() {
  const [on, toggle] = useToggle(false);
  return <button onClick={toggle}>{on ? "ON" : "OFF"}</button>;
}`,
    },

    useLocalStorage: {
        purpose:
            "useLocalStorage keeps state in sync with localStorage so values survive page refresh.",
        whyUse:
            "Use it for saved names, theme preference, or any setting that should remember the user.",
        howItWorks: [
            "It reads the saved value on first render.",
            "When you update the value, it also writes to localStorage.",
        ],
        tips: [
            "Store only JSON-safe data (strings, numbers, arrays, objects).",
            "Choose clear key names like 'demo-name'.",
        ],
        example: `function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  function setStored(next) {
    setValue(next);
    localStorage.setItem(key, JSON.stringify(next));
  }

  return [value, setStored];
}`,
    },

    useWindowSize: {
        purpose:
            "useWindowSize tracks the browser window width and height and updates when the user resizes.",
        whyUse:
            "Use it for responsive UI decisions in JavaScript, like switching layouts at certain sizes.",
        howItWorks: [
            "It stores width/height in state.",
            "It listens to the resize event.",
            "It cleans up the listener when the component unmounts.",
        ],
        tips: [
            "Prefer CSS media queries when possible.",
            "This hook is helpful when JS logic depends on size.",
        ],
        example: `function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function onResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return size;
}`,
    },
};

export default hookExplanations;
