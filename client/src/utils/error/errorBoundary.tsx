import Router from 'next/router';
import {isInstanceOfApiError} from './errorHandler';
import React from 'react';
import Error404Page from '@pages/404';

type ErrorBoundaryProps = React.PropsWithChildren<{}>;

interface ErrorBoundaryState {
  error: Error | null;
}

const errorBoundaryState: ErrorBoundaryState = {
  error: null,
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = errorBoundaryState;
  }

  static getDerivedStateFromError(error: Error) {
    console.error(error);
    return {error};
  }

  private resetState = () => {
    this.setState(errorBoundaryState);
  };

  private setError = (error: Error) => {
    console.error(error);

    this.setState({error});
  };

  // 전역 에러 중 캐치하지 못한 에러
  private handleError = (event: ErrorEvent) => {
    this.setError(event.error);
    event.preventDefault?.();
  };

  // promise 중 캐치하지 못한 rejection
  private handleRejectedPromise = (event: PromiseRejectionEvent) => {
    event?.promise?.catch?.(this.setError);
    event.preventDefault?.();
  };

  componentDidMount() {
    window.addEventListener('error', this.handleError);
    window.addEventListener('unhandledrejection', this.handleRejectedPromise);
    Router.events.on('routeChangeStart', this.resetState);
  }

  componentWillUnmount() {
    window.removeEventListener('error', this.handleError);
    window.removeEventListener('unhandledrejection', this.handleRejectedPromise);

    Router.events.off('routeChangeStart', this.resetState);
  }

  render() {
    const {error} = this.state;
    if (error) {
      const {redirectUrl, notFound} = error;
      if (notFound) return <Error404Page/>;
      if (redirectUrl) window.location.href = redirectUrl;
      return <Error404Page/>;
    }

    // if (isInstanceOfApiError(error)) {
    //   const {redirectUrl, notFound} = error;
    //   if (notFound) return <Error404Page/>;
    //   if (redirectUrl) window.location.href = redirectUrl;
    //   return <Error404Page/>;
    // }
    return this.props.children;
  }
}
