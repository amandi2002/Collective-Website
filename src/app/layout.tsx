import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const helvetica = localFont({
  src: [
    {
      path: "../../Fonts/helvetica-255/helvetica-light-587ebe5a59211.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../Fonts/helvetica-255/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Fonts/helvetica-255/Helvetica-Oblique.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../Fonts/helvetica-255/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../Fonts/helvetica-255/Helvetica-BoldOblique.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Collective RCM | Healthcare Revenue Cycle Management",
  description: "Premium RCM service provider that focuses on revenue cycle and operational improvements for middle and upper market healthcare systems.",
  icons: {
    icon: "/logo_new.webp",
    apple: "/logo_new.webp",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={helvetica.variable}>
      <body className={helvetica.className}>
        <Navbar />
        <div className="mainContent">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
