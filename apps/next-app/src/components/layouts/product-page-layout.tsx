import "@/styles/global.css";
import { Button } from "@namviet-fe/core-ui";
import "@namviet-fe/core-ui/dist/style.css";
import Head from "next/head";
import { useRouter } from "next/router";

export const metadata = {
  title: "Products Page",
  description: "Products Page description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div className="home">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      {/* header */}

      <Button
        onClick={() => {
          router.push("/");
        }}
      >
        Homepage
      </Button>
      <main>
        {/* sections */}
        {children}
      </main>

      {/* footer */}
    </div>
  );
}
