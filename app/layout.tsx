import type { Metadata } from "next";
import { Vollkorn, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const vollkorn = Vollkorn({
  variable: "--font-vollkorn",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eating course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vollkorn.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
