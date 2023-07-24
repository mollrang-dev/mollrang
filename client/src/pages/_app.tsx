import {LayoutComponent} from "@components/layout/LayoutComponent";
import type {AppProps} from "next/app";
import "@styles/_reset.scss";
import ErrorBoundary from "@utils/error/errorBoundary";

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <ErrorBoundary>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </ErrorBoundary>
    </>
  );
}
