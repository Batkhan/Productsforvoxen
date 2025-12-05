import AddToCartButton from "../../components/AddToCartButton";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const res = await fetch(`/api/products/${id}`, { cache: "no-store" });
  const product = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Product Details</h1>

      <div style={{ display: "flex", gap: "30px" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "400px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />

        <div>
          <h2 style={{ fontSize: "28px", margin: "10px 0" }}>
            {product.title}
          </h2>

          <p style={{ fontSize: "22px", fontWeight: "bold" }}>
            ₹{product.price}
          </p>

          <p style={{ margin: "20px 0" }}>{product.description}</p>

          <AddToCartButton />
        </div>
      </div>
    </div>
  );
}
