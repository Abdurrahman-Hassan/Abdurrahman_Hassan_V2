import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const siteTitle = "Abdurrahman-Hassan_Full-Stack-Dev";
  const siteDescription = "Full-Stack developer based in Karachi, Pakistan.";
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta name="author" content="Abdurrahman Hassan" />
        <meta name="copyright" content="Copyright Abdurrahman © 2023" />
        <meta
          name="theme-color"
          content="#5f9ea0"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#5f9ea0"
          media="(prefers-color-scheme: dark)"
        />

        <meta name="application-name" content="Abdurrahman Hassan" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Abdurrahman Hassan" />
        <meta
          name="description"
          content="Full-Stack developer based in Karachi, Pakistan."
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#5f9ea0" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
