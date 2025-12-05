
export function getCartCount() {
  if (typeof window === "undefined") return 0;
  return Number(localStorage.getItem("cartCount") || 0);
}

export function incrementCartCount() {
  if (typeof window === "undefined") return;
  const current = getCartCount();
  const updated = current + 1;
  localStorage.setItem("cartCount", updated);
  return updated;
}
