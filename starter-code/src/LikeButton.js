import React, { useState } from "react";

const LikeButton = (props) => {
  const [count, setCount] = useState(props.starter);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count} Likes</button>
    </div>
  );
};

export default LikeButton;
