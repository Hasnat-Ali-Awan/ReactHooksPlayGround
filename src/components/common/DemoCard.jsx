import "./DemoCard.css";
import "./demo.css";

function DemoCard({ title, children, practice = false }) {
    const isPractice = practice || String(title).startsWith("Your Turn");

    return (
        <article
            className={`demo-card ${isPractice ? "demo-card--practice" : "demo-card--example"}`}
        >
            <span className="demo-card-badge">
                {isPractice ? "Practice" : "Example"}
            </span>

            <h2 className="demo-card-title">{title}</h2>

            <div className="demo-card-content">{children}</div>
        </article>
    );
}

export default DemoCard;
