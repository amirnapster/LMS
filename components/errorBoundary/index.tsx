import ErrorComponent from 'components/ui/ErrorComponent'
import { Component, ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children?: ReactNode
}

interface ErrorType {
  hasError: boolean
}

export interface ErrorBoundaryState extends ErrorType {
  error: { message: string; stack?: string }
  errorInfo: { componentStack: string }
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: { message: '', stack: '' },
    errorInfo: { componentStack: '' },
  }

  static defaultProps = {
    children: undefined,
  }

  public static getDerivedStateFromError(_: Error): ErrorType {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo })
  }

  public render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) return <ErrorComponent {...this.state} />
    return children
  }
}

export default ErrorBoundary
