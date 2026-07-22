import useFetch from "../../../hooks/useFetch";
import DemoCard from "../../common/DemoCard";

function UserList() {
    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/users?_limit=3"
    );

    return (
        <DemoCard title="useFetch Demo">
            {loading && <p className="practice-hint">Loading...</p>}
            {error && <p className="practice-hint">Error: {error}</p>}
            {data && (
                <ul className="demo-list">
                    {data.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </DemoCard>
    );
}

export default UserList;
