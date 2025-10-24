import "../style/globals.css";
import localFont from "next/font/local";

const apache = localFont({
  src: "./fonts/AldotheApache.woff2",
  variable: "--font-apache",
});

export const metadata = {
  title: "My App",
  description: "Public + Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={apache.variable}>
      <body>{children}</body>
    </html>
  );
}
