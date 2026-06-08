import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "Admit — College counseling, organized",
  description:
    "Build your school list, get AI counselor advice, review essays, and track deadlines — all in one calm workspace. Free to start.",
  openGraph: {
    title: "Admit — College counseling, organized",
    description: "Build your school list, get AI counselor advice, and review essays. Free to start.",
    url: "https://admit-theta.vercel.app",
    siteName: "Admit",
    type: "website",
    images: [
      {
        url: "https://admit-theta.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Admit — College counseling, organized",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admit — College counseling, organized",
    description: "Build your school list, get AI counselor advice, and review essays. Free to start.",
    images: ["https://admit-theta.vercel.app/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
