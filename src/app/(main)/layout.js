import { Sora, Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Provider } from "react-redux";
import store from "@/store";
import ReduxProvider from "@/components/layout/Provider";


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
      <section>
        <ReduxProvider>
        <Header />
        <Sidebar />
        {children}
        <Footer />
        </ReduxProvider>
      </section>
  );
}
