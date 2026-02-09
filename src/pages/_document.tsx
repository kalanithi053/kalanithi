import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script src="https://static.zohocdn.com/zohocrm/v2.0/sdk/4.0.0/sdk.js" strategy="afterInteractive" />
        <Script src="https://crm.zoho.com/crm/javascript/ZohoEmbededAppSDK.min.js" strategy="beforeInteractive" />
        <Script src="https://live.zwidgets.com/js-sdk/1.2/ZohoEmbededAppSDK.min.js" strategy="beforeInteractive" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
