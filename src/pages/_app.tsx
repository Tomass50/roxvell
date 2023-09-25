import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "@/styles/globals.css";
import "@/styles/header.module.css";
import "@/styles/main.module.css";
import "@/styles/achiv.module.css";
import "@/styles/input.module.css";
import "@/styles/order.module.css";
import "@/styles/button.module.css";
import "@/styles/section.module.css";
import "@/styles/comment.module.css";
import "@/styles/footer.module.css";
import "@/styles/404.module.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
