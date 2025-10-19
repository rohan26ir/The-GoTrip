import "../style/globals.css";

export const metadata = {
  title: "My App",
  description: "Public + Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
