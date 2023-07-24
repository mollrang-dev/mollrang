import {LayoutComponent} from "@components/layout/LayoutComponent";
import type {AppProps, AppContext, AppInitialProps} from "next/app";
import "@styles/_reset.scss";
import ErrorBoundary from "@utils/error/errorBoundary";
import {QueryClientProvider, Hydrate} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {queryClient} from "@libs/tanstack";
import {NextComponentType} from "next";
import React from "react";
import {wrapper} from "@store/index";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({Component, pageProps}) => {
  const [queryState] = React.useState(() => queryClient)

  return (
    <>
      <ErrorBoundary>
        <QueryClientProvider client={queryState}>
          <Hydrate state={pageProps.dehydratedState}>
            <LayoutComponent>
              <Component {...pageProps} />
            </LayoutComponent>
            <ReactQueryDevtools initialIsOpen={false}/>
          </Hydrate>
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
export default wrapper.withRedux(App);
