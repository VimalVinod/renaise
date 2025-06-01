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
  description: "Kerala's largest student-led entrepreneurship meetup organized by IEDC Bootcamp CEC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
