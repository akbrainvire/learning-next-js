import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/footer.css";
import "../styles/header.css";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <NextNProgress />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
