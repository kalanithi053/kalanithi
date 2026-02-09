import Footer from "@port/components/Footer";
import Header from "@port/components/Header";
import "@port/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    ["contact", "about", "projects"].forEach((path) => {
      router.prefetch(`/${path}`);
    });
  }, [router]);
  return (
    <PrimeReactProvider>
      {/* <Header /> */}
      <Script src="https://static.zohocdn.com/zohocrm/v2.0/sdk/4.0.0/sdk.js" strategy="afterInteractive" />
      <Script src="https://crm.zoho.com/crm/javascript/ZohoEmbededAppSDK.min.js" strategy="beforeInteractive" />
      <Script src="https://live.zwidgets.com/js-sdk/1.2/ZohoEmbededAppSDK.min.js" strategy="beforeInteractive" />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </PrimeReactProvider>
  );
}
