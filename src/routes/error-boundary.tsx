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
            return <div className="error">
                <p>Oops, Something went wrong from our side.</p>
            </div>
        }

        return this.props.children;
    }
}

