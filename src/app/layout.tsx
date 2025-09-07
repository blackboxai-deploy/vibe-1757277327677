import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Durga Construction & Architect - Professional Construction Services",
  description: "Leading construction and architecture firm providing residential, commercial, and industrial construction services. Expert architectural design, project management, and renovation solutions.",
  keywords: "construction, architecture, building, residential construction, commercial construction, interior design, renovation, project management",
  authors: [{ name: "Durga Construction & Architect" }],
  openGraph: {
    title: "Durga Construction & Architect",
    description: "Professional Construction and Architecture Services",
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
        className="antialiased min-h-screen flex flex-col"
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}