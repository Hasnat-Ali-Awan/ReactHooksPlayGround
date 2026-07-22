import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import DemoCard from "../../common/DemoCard";
import "./LikeButton.css";

function LikeButton() {
    const [isLiked, setLiked] = useState(false);

    function handleLike() {
        setLiked(!isLiked);
    }

    return (
        <DemoCard title="Like Button Example">
            <button
                className={`like-button ${isLiked ? "liked" : ""}`}
                onClick={handleLike}
            >
                <FaHeart color={isLiked ? "red" : "gray"} />
            </button>

            <p className="like-status">
                {isLiked ? "Liked" : "Not Liked"}
            </p>
        </DemoCard>
    );
}

export default LikeButton;
