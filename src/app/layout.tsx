import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/layout/Header";

export const metadata: Metadata = {
  title: "AB Pieno Žvaigždės",
  description: "Pieno žvaigždių produktai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
