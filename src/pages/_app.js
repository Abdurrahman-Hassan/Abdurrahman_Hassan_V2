import Head from "next/head";
import logo from "../../public/favicon/android-chrome-512x512.png";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Abdurrahman Hassan</title>
        <meta
          name="description"
          content="Full-Stack developer based in Karachi, Pakistan."
        />
        <meta property="og:image" content={logo} />
        <meta name="twitter:card" content={logo} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
