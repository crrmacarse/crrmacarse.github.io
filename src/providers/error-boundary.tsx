import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ErrorBoundaryProps {
  hasError: boolean,
  open: boolean,
  error: {
    message?: string,
    stack?: string,
  },
}

export default class ErrorBoundary extends Component<{}, ErrorBoundaryProps> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: {}, open: false };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ hasError: true, error });

    console.warn('%c Error: ', 'background: #dc3545; color: white', error, errorInfo.componentStack);
  }

  render() {
    const { children } = this.props;
    const { hasError, error, open } = this.state;
    const handleToggle = () => this.setState((prevState) => ({ open: !prevState.open }));

    const renderError = () => {
      const { message, stack } = error;

      return (
        <div className="m-3 p-3 border border-dashed max-w-4xl text-sm">
          <h2 className="font-semibold mb-2">{message}</h2>
          <p>{stack}</p>
        </div>
      );
    };

    if (hasError) {
      return (
        <div className="error-boundary-section flex flex-col w-full h-screen justify-center items-center">
          <FontAwesomeIcon icon="exclamation-triangle" className="m-10 exclamation-warning" />
          <p className="text-4xl">Oops, Something went wrong :(</p>
          <a href="/" className="my-3 font-semibold">Return to the homepage.</a>
          {open && renderError()}
          <div className="text-xs font-semibold cursor-pointer" role="button" tabIndex={0} onClick={handleToggle} onKeyDown={handleToggle}>
            <p>{open ? 'Hide Error' : 'Show Error'}</p>
          </div>
        </div>
      );
    }

    return children;
  }
}
