import { useState } from "react";

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved !== null ? JSON.parse(saved) : initialValue;
    });

    function setStoredValue(next) {
        setValue(next);
        localStorage.setItem(key, JSON.stringify(next));
    }

    return [value, setStoredValue];
}

export default useLocalStorage;
