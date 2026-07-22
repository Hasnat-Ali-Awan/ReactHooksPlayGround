import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            try {
                setLoading(true);
                const res = await fetch(url);
                const json = await res.json();
                if (!ignore) {
                    setData(json);
                    setError(null);
                }
            } catch (err) {
                if (!ignore) setError(err.message);
            } finally {
                if (!ignore) setLoading(false);
            }
        }

        fetchData();

        return () => {
            ignore = true;
        };
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
