import { LayoutComponent } from "@components/layout/LayoutComponent";
import type { AppProps } from "next/app";
import "@styles/_reset.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
}
