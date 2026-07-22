import DemoCard from "../../common/DemoCard";

// TODO: Practice useState here!
// Goal: make a like button that toggles between liked / not liked
function LikeButton() {
    return (
        <DemoCard title="Your Turn: Like Button">
            <div className="practice-box">
                <p className="practice-hint">
                    Use <code>useState</code> to toggle liked / not liked
                </p>
            </div>
        </DemoCard>
    );
}

export default LikeButton;
