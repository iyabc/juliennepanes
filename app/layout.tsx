import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const font = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Julienne Panes Portfolio",
  description: "Portfolio of Julienne Panes - Software Developer",
  applicationName: "Julienne Panes Portfolio",
  authors: [{ name: "Julienne Panes", url: "https://juliennepanes.vercel.app/" }],
  keywords: [
    "Julienne Panes",
    "Portfolio",
    "Software Developer",
    "Web Developer",
    "Full-Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "CSS",
    "HTML",
    "Tech Stack",
    "Projects",
    "Experience",
    "About Me",
  ],
  openGraph: {
    title: "Julienne Panes",
    description: "Portfolio of Julienne Panes - Software Developer",
    url: "https://juliennepanes.vercel.app/",
    siteName: "Julienne Panes Portfolio",
    locale: "en_US",
    type: "website",
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
        className={`${font.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
