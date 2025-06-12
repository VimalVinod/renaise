import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat, Inter } from "next/font/google";
import "@styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Renaise 2025 | All Kerala Entrepreneurship Meetup",
  description:
    "Kerala's largest student-led entrepreneurship meetup organized by IEDC Bootcamp CEC. Join us for workshops, networking, and startup opportunities.",
  keywords: [
    "entrepreneurship",
    "Kerala startup",
    "IEDC Bootcamp",
    "Renaise 2025",
    "student entrepreneurs",
    "business meetup",
    "startup networking",
  ],
  authors: [{ name: "IEDC Bootcamp CEC" }],
  category: "Education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://renaise.iedcbootcampcec.org",
  },
  openGraph: {
    title: "Renaise 2025 | All Kerala Entrepreneurship Meetup",
    description:
      "Kerala's largest student-led entrepreneurship meetup organized by IEDC Bootcamp CEC.",
    url: "https://renaise.iedcbootcampcec.org",
    siteName: "Renaise 2025",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://renaise.iedcbootcampcec.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Renaise 2025 - All Kerala Entrepreneurship Meetup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renaise 2025 | All Kerala Entrepreneurship Meetup",
    description:
      "Kerala's largest student-led entrepreneurship meetup organized by IEDC Bootcamp CEC.",
    images: ["https://renaise.iedcbootcampcec.org/twitter-image.jpg"],
    creator: "@iedcbootcamp",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
