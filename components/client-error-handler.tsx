"use client"

import { useEffect } from "react"

export default function ClientErrorHandler() {
  useEffect(() => {
    // Suppress unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.warn("[v0] Unhandled promise rejection prevented:", event.reason)
      event.preventDefault()
    }

    // Suppress global errors
    const handleError = (event: ErrorEvent) => {
      console.warn("[v0] Global error prevented:", event.error?.message)
      // Don't prevent default for critical errors
    }

    // Suppress specific console warnings
    const originalWarn = console.warn
    console.warn = function (...args: any[]) {
      const message = args.join(" ")
      
      // Filter out non-critical warnings
      if (
        message.includes("Multiple instances of Three.js") ||
        message.includes("THREE.Clock") ||
        message.includes("deprecated")
      ) {
        return // Suppress these warnings
      }

      originalWarn.apply(console, args)
    }

    window.addEventListener("unhandledrejection", handleUnhandledRejection)
    window.addEventListener("error", handleError)

    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
      window.removeEventListener("error", handleError)
    }
  }, [])

  return null
}
