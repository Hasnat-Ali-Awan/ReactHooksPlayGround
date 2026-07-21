const hooksData = [
    {
        category: "Beginner",
        hooks: [
            {
                name: "useState",
                path: "/use-state",
                description: "Manage component state",
                completed: false,
            },
            {
                name: "useEffect",
                path: "/use-effect",
                description: "Perform side effects",
                completed: false,
            },
            {
                name: "useRef",
                path: "/use-ref",
                description: "Access DOM & store mutable values",
                completed: false,
            },
            {
                name: "useContext",
                path: "/use-context",
                description: "Share data without prop drilling",
                completed: false,
            },
        ],
    },

    {
        category: "Intermediate",
        hooks: [
            {
                name: "useReducer",
                path: "/use-reducer",
                description: "Manage complex state",
                completed: false,
            },
            {
                name: "useMemo",
                path: "/use-memo",
                description: "Memoize expensive calculations",
                completed: false,
            },
            {
                name: "useCallback",
                path: "/use-callback",
                description: "Memoize functions",
                completed: false,
            },
            {
                name: "useLayoutEffect",
                path: "/use-layout-effect",
                description: "Run before browser paint",
                completed: false,
            },
            {
                name: "useImperativeHandle",
                path: "/use-imperative-handle",
                description: "Customize ref exposure",
                completed: false,
            },
        ],
    },

    {
        category: "Advanced",
        hooks: [
            {
                name: "useId",
                path: "/use-id",
                description: "Generate unique IDs",
                completed: false,
            },
            {
                name: "useSyncExternalStore",
                path: "/use-sync-external-store",
                description: "Subscribe to external stores",
                completed: false,
            },
            {
                name: "useInsertionEffect",
                path: "/use-insertion-effect",
                description: "Insert styles before layout",
                completed: false,
            },
            {
                name: "useDebugValue",
                path: "/use-debug-value",
                description: "Debug custom hooks",
                completed: false,
            },
        ],
    },

    {
        category: "React 18",
        hooks: [
            {
                name: "useTransition",
                path: "/use-transition",
                description: "Mark updates as non-urgent",
                completed: false,
            },
            {
                name: "useDeferredValue",
                path: "/use-deferred-value",
                description: "Defer expensive updates",
                completed: false,
            },
        ],
    },

    {
        category: "React 19",
        hooks: [
            {
                name: "useActionState",
                path: "/use-action-state",
                description: "Manage action state",
                completed: false,
            },
            {
                name: "useOptimistic",
                path: "/use-optimistic",
                description: "Optimistic UI updates",
                completed: false,
            },
            {
                name: "useFormStatus",
                path: "/use-form-status",
                description: "Track form submission status",
                completed: false,
            },
            {
                name: "use",
                path: "/use",
                description: "Read promises and context",
                completed: false,
            },
        ],
    },

    {
        category: "Custom Hooks",
        hooks: [
            {
                name: "useCounter",
                path: "/use-counter",
                description: "Reusable counter hook",
                completed: false,
            },
            {
                name: "useFetch",
                path: "/use-fetch",
                description: "Reusable fetch hook",
                completed: false,
            },
            {
                name: "useToggle",
                path: "/use-toggle",
                description: "Reusable toggle hook",
                completed: false,
            },
            {
                name: "useLocalStorage",
                path: "/use-local-storage",
                description: "Persist state in localStorage",
                completed: false,
            },
            {
                name: "useWindowSize",
                path: "/use-window-size",
                description: "Track window dimensions",
                completed: false,
            },
        ],
    },
];

export default hooksData;