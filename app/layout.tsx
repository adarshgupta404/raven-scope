import 'animate.css';
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from 'next/font/google';
import "./globals.css";

// Load the "Be Vietnam Pro" font
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Define the font weights you want to use
  variable: '--font-vietnam-pro', // Define a CSS variable for easy use
});

export const metadata: Metadata = {
  title: "Raven Scope Investigations",
  description: "Raven Scope Investigations provides professional investigative services, ensuring thorough and discreet inquiries for our clients.",
  icons: {
    icon: '/favicon.ico', // Path to your favicon file
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={beVietnamPro.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" /> {/* Favicon link */}
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
