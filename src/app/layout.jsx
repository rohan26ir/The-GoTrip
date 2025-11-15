// app/layout.jsx
import "../style/globals.css";
import localFont from "next/font/local";
import ogImage from "../../public/og_image.png";
import NetworkFavicon from "../../components/NetworkFavicon";

const apache = localFont({
  src: "./fonts/AldotheApache.woff2",
  variable: "--font-apache",
});

export const metadata = {
  title: "The GoTrip - Explore the Bangladesh Wonders",
  description:
    "Discover the breathtaking beauty of Bangladesh with The GoTrip. Explore stunning destinations, cultural heritage, and hidden gems across the country for an unforgettable travel experience.",
  keywords: [
    "Bangladesh travel",
    "tourism in Bangladesh",
    "Bangladesh destinations",
    "travel guide",
    "Bangladesh tourism",
  ],
  authors: [{ name: "Mi. Rohan", url: "https://rohansfolio.web.app/" }],
  robots: "index, follow",
  openGraph: {
    title: "The GoTrip - Explore the Bangladesh Wonders",
    description:
      "Discover the breathtaking beauty of Bangladesh with The GoTrip. Explore stunning destinations, cultural heritage, and hidden gems across the country.",
    url: "https://thegotrip.com",
    siteName: "The GoTrip",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "Explore the Wonders of Bangladesh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The GoTrip - Explore the Bangladesh Wonders",
    description:
      "Discover the breathtaking beauty of Bangladesh with The GoTrip. Explore stunning destinations, cultural heritage, and hidden gems across the country.",
    images: [ogImage.src],
    site: "@TheGoTrip",
  },
  icons: {
    icon: "/favicon-32.png", // default online favicon
    shortcut: "/favicon-32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={apache.variable}>
      <body>
        <NetworkFavicon />
        {children}
      </body>
    </html>
  );
}