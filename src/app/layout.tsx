import type { Metadata } from "next";
import { Baloo_2, Yellowtail, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fullrburgers.lk"),
  title: "Full’r Burgers - Own Your Mess | Colombo's Juiciest Handcrafted Burgers",
  description:
    "When it comes to burgers, we believe that you must be ready to get messy to truly experience something delicious. Full’r Burgers - Own Your Mess across 8 outlets in Colombo.",
  keywords: [
    "Fullr Burgers",
    "Full'r Colombo",
    "Best Burgers in Sri Lanka",
    "Desi Chick",
    "Dragon Bait",
    "Major General",
    "Beef Me Up Scotty",
    "Gojira Burger",
    "Pita Kotte",
    "Colombo Burgers",
    "Own Your Mess",
  ],
  icons: {
    icon: "/assets/favicon-fullr.jpg",
    apple: "/assets/favicon-fullr.jpg",
  },
  openGraph: {
    title: "Full’r Burgers - Own Your Mess",
    description: "Brace yourself for bold flavours, juicy patties, and mouthwatering toppings in every bite!",
    url: "https://fullrburgers.lk",
    siteName: "Full'r Burgers",
    images: [
      {
        url: "/assets/Dragon-Bait-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Full'r Burgers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${yellowtail.variable} ${roboto.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1f2937] selection:bg-[#FFCA05] selection:text-[#EA1E35]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
