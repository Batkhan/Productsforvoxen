import "./globals.css"
import Navbar from "./components/Navbar";

export const data = {
    title: "Product App: List of Soaps we use daily"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}