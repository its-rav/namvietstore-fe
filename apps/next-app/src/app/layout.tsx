import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nam Viet Store",
  description: "Nam Viet Store description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
