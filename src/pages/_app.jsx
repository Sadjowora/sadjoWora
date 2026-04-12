// pages/_app.jsx
// Portfolio Sadjo Wora — App avec Google Analytics

import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const GA_ID = "G-6PZ9BW3S0C";

function sendPageView(url) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_ID, { page_path: url });
  }
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Charge le script Google Analytics
    const script1 = document.createElement("script");
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', { page_path: window.location.pathname });
    `;
    document.head.appendChild(script2);

    // Écoute les changements de page (navigation SPA)
    const handleRouteChange = (url) => sendPageView(url);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}