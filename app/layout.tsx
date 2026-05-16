import "./globals.css";
import { ReactNode } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";

export const metadata = {
  title: "OWLEN",
  description: "Crafted for the unseen.",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}