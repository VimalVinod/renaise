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
    "IEDC Bootcamp CEC",
    "Renaise 2025",
    "student entrepreneurs",
    "business meetup",
    "startup networking",
    "innovation",
    "workshops",
    "entrepreneurship events",
    "CEC Chengannur",
    "college entrepreneurship",
    "entrepreneurship meetup",
    "startup events",
    "business workshops",
    "entrepreneurship education",
    "startup opportunities",
    "entrepreneurship community",
    "student-led events",
    "entrepreneurship networking",
    "entrepreneurship workshops",
    "entrepreneurship conference",
    "entrepreneurship summit",
    "entrepreneurship forum",
    "entrepreneurship talks",
    "entrepreneurship speakers",
    "entrepreneurship panel",
    "entrepreneurship pitch",
    "entrepreneurship competition",
    "entrepreneurship mentorship",
    "entrepreneurship resources",
    "entrepreneurship support",
    "entrepreneurship funding",
    "entrepreneurship incubator",
    "entrepreneurship accelerator",
    "entrepreneurship ecosystem",
    "entrepreneurship innovation",
    "entrepreneurship growth",
    "entrepreneurship success",
    "entrepreneurship challenges",
    "entrepreneurship trends",
    "entrepreneurship opportunities",
    "entrepreneurship skills",
    "entrepreneurship knowledge",
    "entrepreneurship inspiration",
    "entrepreneurship motivation",
    "entrepreneurship leadership",
    "entrepreneurship vision",
    "entrepreneurship strategy",
    "entrepreneurship planning",
    "entrepreneurship execution",
    "entrepreneurship impact",
    "entrepreneurship future",
    "entrepreneurship community building",
    "entrepreneurship collaboration",
    "entrepreneurship partnerships",
    "entrepreneurship networking events",
    "entrepreneurship online",
    "entrepreneurship offline",
    "entrepreneurship resources",
    "entrepreneurship tools",
    "entrepreneurship platforms",
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
      { url: "/img/logo.svg", type: "image/svg+xml" },
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

export const viewport = {
  themeColor: "#fbfbdf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Renaise 2025 | All Kerala Entrepreneurship Meetup",
              description:
                "Kerala's largest student-led entrepreneurship meetup organized by IEDC Bootcamp CEC. Join us for workshops, networking, and startup opportunities.",
              //starts on 18th june 2025
              startDate: "2025-06-18T09:00:00+05:30",
              //ends on 5th july 2025
              endDate: "2025-07-05T18:00:00+05:30",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "College of Engineering Chengannur",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "College of Engineering Chengannur",
                  addressLocality: "Chengannur",
                  addressRegion: "Kerala",
                  postalCode: "689121",
                  addressCountry: "IN",
                },
              },
              image: ["https://renaise.iedcbootcampcec.org/og-image.jpg"],
              organizer: {
                "@type": "Organization",
                name: "IEDC Bootcamp CEC",
                url: "https://iedcbootcampcec.org",
              },
              offers: {
                "@type": "Offer",
                url: "https://renaise.iedcbootcampcec.org/tickets",
                price: "0",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                //valid from 18th june 2025
                validFrom: "2025-06-18T09:00:00+05:30",
                validThrough: "2025-07-05T18:00:00+05:30",
                itemOffered: {
                  "@type": "Service",
                  name: "Renaise 2025 Ticket",
                  description:
                    "Free entry to Renaise 2025 - All Kerala Entrepreneurship Meetup",
                },
              },
              performer: {
                "@type": "Organization",
                name: "IEDC Bootcamp CEC",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
