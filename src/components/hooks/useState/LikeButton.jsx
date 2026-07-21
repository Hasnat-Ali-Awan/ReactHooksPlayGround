import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./LikeButton.css"
import DemoCard from "../../common/DemoCard";

function LikeButton() {
    const [isLiked, setLiked] = useState(false);

    function handleLike() {
        setLiked(!isLiked);
    }

    return (
        <DemoCard title="Like Button">

            <button
                className={`like-button ${isLiked ? "liked" : ""}`}
                onClick={handleLike}
            >
                {isLiked ? <FaHeart color="red" /> : <FaHeart />}
            </button>

            <p className="like-status">
                {isLiked ? "Liked ❤️" : "Not Liked 🤍"}
            </p>

        </DemoCard>
    );
}

export default LikeButton;