import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aegis Gov DAO LLC | Fractional AI Officer for Government Contractors",
  description:
    "AI transformation for small government contractors. Consult. Educate. Implement. We help GovCon firms automate proposals, compliance, and SAM.gov monitoring.",
  keywords:
    "fractional AI officer, government contractor AI, SBIR AI, STTR automation, FAR compliance AI, proposal automation, SAM.gov monitoring",
  openGraph: {
    title: "Aegis Gov DAO LLC | Fractional AI Officer for Government Contractors",
    description:
      "AI transformation for small government contractors. Consult. Educate. Implement.",
    url: "https://aegisgov.ai",
    siteName: "Aegis Gov DAO LLC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aegis Gov DAO LLC | Fractional AI Officer",
    description:
      "AI transformation for small government contractors. Consult. Educate. Implement.",
  },
  metadataBase: new URL("https://aegisgov.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
