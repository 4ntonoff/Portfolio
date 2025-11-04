import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Alexandr Antonov | Frontend Developer | React & TypeScript",
    template: "%s | Alexandr Antonov",
  },
  description:
    "Alexandr Antonov - Frontend Developer with 3+ years of experience in building scalable React & TypeScript applications. Expert in performance optimization, e-commerce solutions, and modern web development. Open to remote work.",

  openGraph: {
    title: "Alexandr Antonov | Frontend Developer | React & TypeScript",
    description:
      "Frontend Developer with 3+ years experience at Zalando and Crawless. Specializing in React, TypeScript, and web performance optimization. 1st Place winner at Tekwill National Contest 2023.",
    url: "https://alexandr-antonov.dev",
    siteName: "Alexandr Antonov Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Alexandr Antonov - Frontend Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "profile",
    countryName: "Moldova",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alexandr Antonov | Frontend Developer | React & TypeScript",
    description:
      "Frontend Developer building high-performance web applications. 3+ years at Zalando & Crawless. Expert in React, TypeScript, performance optimization.",
    images: ["/og.png"],
    creator: "@alexandr_dev",
    site: "@alexandr_dev",
  },

  metadataBase: new URL("https://alexandr-antonov.dev"),
  alternates: {
    canonical: "https://alexandr-antonov.dev",
  },

  manifest: "/Portfolio/manifest.json",

  icons: {
    icon: "/Portfolio/og.png",
    shortcut: "/Portfolio/og.png",
    apple: "/Portfolio/og.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/Portfolio/og.png",
    },
  },

  keywords: [
    "Asharib Ali",
    "AI Engineer",
    "Blockchain Developer",
    "Full Stack Developer",
    "Agentic AI",
    "Cloud Native",
    "EduHub CTO",
    "EduChain",
    "GIAIC Teacher",
    "Tech Educator Pakistan",
    "AI Education",
    "Blockchain Education",
    "Web3 Developer",
    "Solidity Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Python Developer",
    "Tech Community Manager",
    "Programming Instructor",
    "Open Source Contributor",
    "Hackathon Winner",
    "GIAIC",
    "PIAIC",
    "Panaverse",
  ],
  authors: [{ name: "Asharib Ali", url: "https://asharib.xyz" }],
  creator: "Asharib Ali",
  publisher: "Asharib Ali",
  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "1v-RJKSxgBsm7IcEXZVifYF0BCCKx9TjXOYQFKNDdOg",
  },

  other: {
    "pinterest-media": "/og.png",
    "pinterest-description":
      "CTO at EduHub building Vibe Tooling for EduChain. Teaching 1,500+ students Agentic AI at GIAIC. 3+ years experience in AI, Blockchain & Full-Stack Development.",

    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Asharib Ali",

    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/og.png",

    "theme-color": "#000000",
    "msapplication-navbutton-color": "#000000",

    "mobile-web-app-capable": "yes",
    "application-name": "Asharib Ali Portfolio",
    "format-detection": "telephone=no",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Asharib Ali",
    url: "https://asharib.xyz",
    image: "https://avatars.githubusercontent.com/u/102221198?v=4",
    sameAs: [
      "https://github.com/AsharibAli",
      "https://www.linkedin.com/in/asharibali/",
      "https://x.com/0xAsharib",
      "https://asharibali.medium.com/",
      "https://www.youtube.com/@0xAsharib",
    ],
    jobTitle: "Chief Technology Officer",
    worksFor: {
      "@type": "Organization",
      name: "EduHub",
      url: "https://eduhub.dev/",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "PIAIC",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Blockchain Technology",
      "Full Stack Development",
      "Cloud Native Development",
      "Agentic AI",
      "Web3",
      "Solidity",
      "TypeScript",
      "Python",
      "React",
      "Next.js",
    ],
    description:
      "CTO at EduHub, AI & Blockchain Developer, and Lead Teacher at GIAIC. Teaching 1,500+ students Cloud Native & Agentic AI with 3+ years of tech experience.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Pakistan",
    },
    email: "contact@asharib.xyz",
  };

  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8CXGRC7T09"
      ></Script>
      <Script id="google-analytics">
        {`
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8CXGRC7T09');
  `}
      </Script>
      <body>{children}</body>
    </html>
  );
}
