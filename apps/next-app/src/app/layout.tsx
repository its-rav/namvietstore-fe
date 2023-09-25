import Head from "next/head";

export const metadata = {
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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      {/* header */}
      <body>{children}</body>
    </html>
  );
}
