"use client"

import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[v0] Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a1628] flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-black text-[#ff5722] mb-4">Oops!</h1>
            <p className="text-white/60 mb-6">Something went wrong, but we're working on it.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#ff5722] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#ff7043] transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default function ErrorBoundaryWrapper({ children }: { children: ReactNode }) {
  return <ErrorBoundary>{children}</ErrorBoundary>
}
