import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import GNB from "@/components/GNB/GNB";
import ThemeProviders from "@/components/providers/ThemeProviders";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#000000",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className='scroll-pt-[3.5rem]'>
      <body
        className={cn(
          "min-h-screen bg-background font-pretendard antialiased",
          inter.variable
        )}
      >
        <ThemeProviders>
          <div className='flex flex-col bg-background min-h-dvh max-w-5xl mx-auto'>
            <Analytics />
            <SpeedInsights />
            <GNB />
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
