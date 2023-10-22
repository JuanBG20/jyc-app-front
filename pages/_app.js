import "@/styles/globals.css";
import "@/styles/createForm.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Stock App</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
