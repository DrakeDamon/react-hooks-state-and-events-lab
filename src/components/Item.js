import React, { useState } from "react";

function Item({ name, category}) {
  // Step 1: Initialize state
  const [inCart, setInCart] = useState();

  // Step 2: Handle click event
  const handleClick = () => {
    setInCart(!inCart); // Toggle the inCart state
  };

  return (
    // Step 3: Conditional rendering based on inCart state
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
