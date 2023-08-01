import "./globals.css";
import { Ubuntu } from "next/font/google";
import type { Metadata } from "next";
import Header from "./components/layout/Header";
import ProductSlide3 from "./components/ProductSlide3";

export const metadata: Metadata = {
  title: "AB Pieno Žvaigždės",
  description: "Pieno žvaigždių produktai",
};

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Header />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
