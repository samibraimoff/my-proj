import React, { type ErrorInfo, Component, Suspense } from 'react'
import { PageError } from 'widgets/page-error/page-error'

interface ErrorBoundryProps {
  children?: React.ReactNode
}

interface ErrorBoundryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundryProps, ErrorBoundryState> {
  constructor (props: ErrorBoundryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (_error: Error): ErrorBoundryState {
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: ErrorInfo): void {
    console.log(error, info.componentStack)
  }

  render (): React.ReactNode {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return (<Suspense fallback=''><PageError /></Suspense>)
    }

    return children
  }
}
