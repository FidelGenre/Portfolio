import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "Fidel Genre - Software Developer Portfolio",
  description:
    "Portfolio of Fidel Genre, a passionate full-stack developer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fix Safari iOS viewport jump: set --vh once on load, never update on scroll */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', vh + 'px');
          })();
        `}} />
      </head>
      <body className="bg-[#1a1a1a] text-white">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
