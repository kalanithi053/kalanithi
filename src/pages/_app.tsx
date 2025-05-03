import Header from "@port/components/Header";
import "@port/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
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
      <Header />
      <Component {...pageProps} />
    </PrimeReactProvider>
  );
}
