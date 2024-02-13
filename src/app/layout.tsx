import Head from "next/head";
import "../../styles/globals.css";
import { Providers } from "@/redux/provider";

export const metadata = {
  title: "Template",
  description: "App",
  icons: {
    icon: "/logo3.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="color-scheme" content="light only" />
        <link rel="shortcut icon" href="/logo3.ico" />
      </Head>
      <body className="light" content="light only">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
