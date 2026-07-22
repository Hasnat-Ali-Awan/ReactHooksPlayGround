const hooksData = [
    {
        category: "Beginner",
        hooks: [
            {
                name: "useState",
                path: "/use-state",
                description: "Manage component state",
                completed: true,
            },
            {
                name: "useEffect",
                path: "/use-effect",
                description: "Perform side effects",
                completed: true,
            },
            {
                name: "useRef",
                path: "/use-ref",
                description: "Access DOM & store mutable values",
                completed: true,
            },
            {
                name: "useContext",
                path: "/use-context",
                description: "Share data without prop drilling",
                completed: true,
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
                completed: true,
            },
            {
                name: "useMemo",
                path: "/use-memo",
                description: "Memoize expensive calculations",
                completed: true,
            },
            {
                name: "useCallback",
                path: "/use-callback",
                description: "Memoize functions",
                completed: true,
            },
            {
                name: "useLayoutEffect",
                path: "/use-layout-effect",
                description: "Run before browser paint",
                completed: true,
            },
            {
                name: "useImperativeHandle",
                path: "/use-imperative-handle",
                description: "Customize ref exposure",
                completed: true,
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
                completed: true,
            },
            {
                name: "useSyncExternalStore",
                path: "/use-sync-external-store",
                description: "Subscribe to external stores",
                completed: true,
            },
            {
                name: "useInsertionEffect",
                path: "/use-insertion-effect",
                description: "Insert styles before layout",
                completed: true,
            },
            {
                name: "useDebugValue",
                path: "/use-debug-value",
                description: "Debug custom hooks",
                completed: true,
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
                completed: true,
            },
            {
                name: "useDeferredValue",
                path: "/use-deferred-value",
                description: "Defer expensive updates",
                completed: true,
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
                completed: true,
            },
            {
                name: "useOptimistic",
                path: "/use-optimistic",
                description: "Optimistic UI updates",
                completed: true,
            },
            {
                name: "useFormStatus",
                path: "/use-form-status",
                description: "Track form submission status",
                completed: true,
            },
            {
                name: "use",
                path: "/use",
                description: "Read promises and context",
                completed: true,
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
                completed: true,
            },
            {
                name: "useFetch",
                path: "/use-fetch",
                description: "Reusable fetch hook",
                completed: true,
            },
            {
                name: "useToggle",
                path: "/use-toggle",
                description: "Reusable toggle hook",
                completed: true,
            },
            {
                name: "useLocalStorage",
                path: "/use-local-storage",
                description: "Persist state in localStorage",
                completed: true,
            },
            {
                name: "useWindowSize",
                path: "/use-window-size",
                description: "Track window dimensions",
                completed: true,
            },
        ],
    },
];

export default hooksData;