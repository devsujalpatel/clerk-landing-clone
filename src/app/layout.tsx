import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Container } from "@/components/container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clerk Landing Clone | Sujal Patel",
  description: "Clerk Landing Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`antialiased`}>
        <Container className="relative">
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
