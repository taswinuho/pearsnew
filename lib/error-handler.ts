// Global error and promise rejection handler
export function setupErrorHandling() {
  if (typeof window === "undefined") return

  // Handle unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
    console.error("[v0] Unhandled promise rejection:", event.reason)
    // Prevent the error from crashing the app
    event.preventDefault()
  })

  // Handle global errors
  window.addEventListener("error", (event) => {
    console.error("[v0] Global error:", event.error)
    // Log error but don't prevent default for critical errors
  })

  // Suppress THREE.js multiple instance warning
  const originalWarn = console.warn
  console.warn = function (...args) {
    const message = args.join(" ")
    if (message.includes("Multiple instances of Three.js")) {
      return // Suppress this specific warning
    }
    originalWarn.apply(console, args)
  }

  // Suppress deprecated THREE.Clock warning
  if (message.includes("THREE.Clock") || message.includes("deprecated")) {
    return // Suppress deprecation warnings
  }
}

// Safe fetch wrapper
export async function safeFetch(url: string, options?: RequestInit): Promise<Response | null> {
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      console.warn(`[v0] Fetch failed for ${url}: ${response.statusText}`)
      return null
    }
    return response
  } catch (error) {
    console.error(`[v0] Fetch error for ${url}:`, error)
    return null
  }
}

// Async image loading with fallback
export function preloadImage(url: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => {
      console.warn(`[v0] Failed to load image: ${url}`)
      resolve(null)
    }
    img.src = url
  })
}

// Safe localStorage access
export function getSafeLocalStorage(key: string, defaultValue: any = null) {
  try {
    if (typeof window === "undefined") return defaultValue
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error(`[v0] Error reading localStorage key "${key}":`, error)
    return defaultValue
  }
}

export function setSafeLocalStorage(key: string, value: any) {
  try {
    if (typeof window === "undefined") return
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(`[v0] Error writing to localStorage key "${key}":`, error)
  }
}
