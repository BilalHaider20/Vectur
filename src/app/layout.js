import "./globals.css";
import { Sora, Inter } from "next/font/google";


const sora = Sora({
  variable: "--font-sora-sans", 
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter", 
  subsets: ["latin"],
});

export const metadata = {
  title: "Vectur",
  description: "Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} >
      <body className={`${sora.variable} ${inter.variable} antialiased p-20 `}>{children}</body>
    </html>
  );
}