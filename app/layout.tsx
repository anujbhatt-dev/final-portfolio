import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/Provider";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://anujbhatt.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anuj Bhatt | Full Stack Developer",
    template: "%s | Anuj Bhatt",
  },
  description:
    "Portfolio of Anuj Bhatt, a full stack developer crafting performant, real-time web experiences with JavaScript, TypeScript, and Next.js.",
  keywords: [
    "Anuj Bhatt",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Anuj Bhatt" }],
  openGraph: {
    type: "website",
    url: "/",
    title: "Anuj Bhatt | Full Stack Developer",
    description:
      "Explore the work, projects, and experience of Anuj Bhatt, a full stack developer building modern web applications.",
    siteName: "Anuj Bhatt Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/my-pic.png",
        width: 1200,
        height: 630,
        alt: "Portrait of Anuj Bhatt - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Bhatt | Full Stack Developer",
    description:
      "Explore the work, projects, and experience of Anuj Bhatt, a full stack developer building modern web applications.",
    images: ["/my-pic.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-[100vh]  tracking-wide overflow-x-hidden`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
