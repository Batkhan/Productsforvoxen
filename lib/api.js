export function getBaseUrl() {
  if (typeof window !== "undefined") {
    // Browser
    return "";
  }
  // Server (Vercel or Node)
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
}
