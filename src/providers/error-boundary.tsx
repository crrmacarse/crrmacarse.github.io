import React, { Component } from 'react'

export default class ErrorBoundary extends Component<{},
    { hasError: boolean, open: boolean, err: { error?: string, errorInfo?: { componentStack?: string } } }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false, err: {}, open: false };
    }

    componentDidCatch(error: any, errorInfo: any) {
        this.setState({ hasError: true, err: { error, errorInfo } })

        console.log(`%c Error: `, 'background: #dc3545; color: white', error, errorInfo.componentStack)
    }

    render() {
        const { hasError, err, open } = this.state

        const renderError = () => {
            const { error, errorInfo } = err;

            return (
                <div className="m-3 p-3 border border-dashed max-w-4xl text-sm">
                    <h2 className="font-semibold mb-2">{error}</h2>
                    <p>{errorInfo}</p>
                </div>
            )
        }

        if (hasError) {
            return <div className="error-boundary-section flex flex-col w-full h-screen justify-center items-center">
                <i className="fas fa-exclamation-triangle m-10"></i>
                <p className="text-4xl">{`Oops, Something went wrong :(`}</p>
                <a href="/" className="my-3 font-semibold">Return to the homepage.</a>
                {open && renderError()}
                <p className="text-xs font-semibold cursor-pointer" onClick={() => this.setState(prevState => ({ open: !prevState.open }))}>{open ? 'Hide Error' : 'Show Error'}</p>
            </div>
        }

        return this.props.children;
    }
}

