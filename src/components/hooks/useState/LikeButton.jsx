import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./LikeButton.css"

function LikeButton() {
    const [isLiked, setLiked] = useState(false);

    function handleLike() {
        setLiked(!isLiked);
    }

    return (
        <div className="like-container">
            <button
                className={`like-button ${isLiked ? "liked" : ""}`}
                onClick={handleLike}>
                {isLiked ? (
                    <FaHeart color="red" />
                ) : (
                    <FaHeart />
                )}
            </button>

        </div>
    );
}

export default LikeButton;