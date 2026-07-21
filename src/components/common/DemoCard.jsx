import "./DemoCard.css";

function DemoCard({ title, children }) {
    return (
        <div className="demo-card">

            <h2 className="demo-card-title">
                {title}
            </h2>

            <div className="demo-card-content">
                {children}
            </div>

        </div>
    );
}

export default DemoCard;