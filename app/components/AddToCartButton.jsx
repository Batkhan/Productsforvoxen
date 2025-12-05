"use client";

import { incrementCartCount } from "../cartStore";

export default function AddToCartButton() {
  return (
    <button
  onClick={() => {
    incrementCartCount();
    window.dispatchEvent(new Event("storage"));
    alert("Added to cart!");
  }}
  style={{
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
  }}
>
  Add to Cart
</button>
  );
}
