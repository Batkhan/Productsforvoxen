import { getBaseUrl } from "../lib/api.js";
export const dynamic = "force-dynamic";

export default async function HomePage() {
    const base = getBaseUrl();
    const res = await fetch(`${base}/api/products`, { cache: "no-store" });
    const products = await res.json();

    return (
        <div style={{ padding: "20px" }}>
        <h1 style={{ marginBottom: "20px" }}>Products</h1>

        <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px"
        }}
        >
        {products.map(product => (
            <div
            key={product.id}
            style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "8px",
                backgroundColor: "#fafafa"
            }}
            >
            <img
                src={product.image}
                alt={product.title}
                style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "5px"
                }}
            />

            <h2 style={{ fontSize: "18px", marginTop: "10px" }}>
                {product.title}
            </h2>

            <p style={{ margin: "6px 0" }}>₹{product.price}</p>

            <a
                href={`/products/${product.id}`}
                style={{
                marginTop: "10px",
                display: "inline-block",
                backgroundColor: "#000",
                color: "#fff",
                padding: "8px 12px",
                borderRadius: "4px",
                textDecoration: "none"
                }}
            >
                View Details
            </a>
            </div>
        ))}
        </div>
    </div>
    );
}