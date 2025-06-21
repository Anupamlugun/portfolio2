import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anupam Lugun – Full Stack Software Developer from Simdega, Jharkhand",
  description:
    "Portfolio of Anupam Lugun – A professional full-stack software developer from Simdega, Jharkhand. Experienced in React, Java, Spring Boot, and scalable enterprise applications.",
  keywords: [
    "Anupam Lugun",
    "anupamlugun",
    "Simdega",
    "Software Developer Simdega",
    "Software Engineer Ranchi",
    "Developer Jharkhand",
    "Full Stack Developer India",
    "React Developer Jharkhand",
    "Spring Boot Developer",
    "Java Developer Simdega",
    "Frontend Developer Ranchi",
  ].join(", "),
  authors: [
    { name: "Anupam Lugun", url: `${process.env.NEXT_PUBLIC_SITE_URL}` },
  ],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  openGraph: {
    title: "Anupam Lugun – Full Stack Software Developer",
    description:
      "I'm Anupam Lugun, a Full Stack Developer skilled in React, Java, and Spring Boot. Explore my portfolio, blog, and projects.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    siteName: "Anupam Lugun | Full Stack Developer",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/img/profile.jpg`,
        width: 1200,
        height: 1200,
        alt: "Anupam Lugun – Full Stack Software Developer from Jharkhand, India",
        type: "image/jpeg",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anupam Lugun",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    jobTitle: "Full Stack Java Developer",
    sameAs: [
      "https://www.linkedin.com/in/anupam-lugun",
      "https://github.com/anupamlugun",
      "https://www.instagram.com/anupam_lugun",
      "https://m.youtube.com/@anupamlugun",
    ],
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta
          name="google-site-verification"
          content="S4PxhMF5hiEdAwaq9VxxRMkCnzCnU2GnPcnoo-5r5_g"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
