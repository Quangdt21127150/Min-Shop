import clsx from "clsx";
import { useState } from "react";
import heart from "../assets/heart.svg";
import red_heart from "../assets/red-heart.jpg";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="w-16 h-16 rounded-full border-2 border-accent relative"
    >
      {[heart, red_heart].map((imgSrc, idx) => (
        <img
          key={imgSrc}
          src={imgSrc}
          alt="Heart"
          className={clsx(
            liked === (idx === 1) ? "opacity-100" : "opacity-0",
            "transition-opacity duration-300 absolute inset-0 w-8 mx-auto my-auto"
          )}
        />
      ))}
    </button>
  );
}

export default LikeButton;
