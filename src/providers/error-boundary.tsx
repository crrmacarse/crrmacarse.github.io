import React, { Component } from 'react'

export default class ErrorBoundary extends Component<{}, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: any, errorInfo: any) {
        this.setState({ hasError: true })

        console.log(`%c Error: `, 'background: #dc3545; color: white', error, errorInfo.componentStack)
    }

    render() {
        if (this.state.hasError) {
            return <div className="error-boundary-section flex flex-col w-full h-screen justify-center items-center">
            <i className="fas fa-exclamation-triangle m-10"></i>
            <p className="text-4xl">{`Oops, Something went wrong :(`}</p>
            <a href="/" className="my-3 font-semibold">Return to the homepage.</a>
          </div>
        }

        return this.props.children;
    }
}

