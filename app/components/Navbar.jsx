"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCartCount } from "../cartStore";

export default function Navbar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCartCount());

    const handleStorage = () => {
      setCount(getCartCount());
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <nav 
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #ddd",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold", color: "#000" }}>
        ProductStore
      </span>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#000", fontSize: "16px" }}>
          Home
        </Link>

        <span style={{ color: "#000", fontSize: "18px" }}>
          🛒 ({count})
        </span>
      </div>
    </nav>
  );
}
