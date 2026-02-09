import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script src="https://js.zohostatic.com/crm/v2.1/sdk/ZohoEmbededAppSDK.min.js" strategy="afterInteractive" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
