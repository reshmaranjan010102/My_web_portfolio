import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono, Ubuntu, Rubik } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: "300"
});

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: "Reshma Ranjan",
  description: "A software developer",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
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
        className={`${ubuntu.variable} ${rubik.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
