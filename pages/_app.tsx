import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Books</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
