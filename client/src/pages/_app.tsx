import {LayoutComponent} from "@components/layout/LayoutComponent";
import type {AppProps, AppContext, AppInitialProps} from "next/app";
import "@styles/_reset.scss";
import ErrorBoundary from "@utils/error/errorBoundary";
import {QueryClientProvider, Hydrate} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {queryClient} from "@libs/tanstack";
import {NextComponentType} from "next";
import React from "react";
import {dehydrate} from '@tanstack/react-query'

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({Component, pageProps}) => {
  const queryClientRef = React.useRef<queryClient>();

  return (
    <>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <LayoutComponent>
            <Component {...pageProps} />
          </LayoutComponent>
          <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}
App.getInitialProps = async ({Component, ctx}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {pageProps}
}
export default App;