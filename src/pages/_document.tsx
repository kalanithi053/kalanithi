import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <Script src="https://js.zohostatic.com/crm/v2.1/sdk/ZohoEmbededAppSDK.min.js" strategy="afterInteractive" />
      </body>
    </Html>
  );
}
