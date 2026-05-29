// Utility functions for Three.js to avoid multiple imports and deprecation warnings

export const createTimeTracker = () => {
  let startTime = Date.now()
  let lastTime = Date.now()

  return {
    getElapsedTime: () => (Date.now() - startTime) / 1000,
    getDelta: () => {
      const now = Date.now()
      const delta = (now - lastTime) / 1000
      lastTime = now
      return delta
    },
    reset: () => {
      startTime = Date.now()
      lastTime = Date.now()
    },
  }
}

// Fallback for THREE.Timer if using older versions
export class PerformanceTimer {
  private _startTime: number
  private _previousTime: number

  constructor() {
    this._startTime = this._getTime()
    this._previousTime = this._startTime
  }

  private _getTime(): number {
    return performance.now() / 1000
  }

  getElapsedTime(): number {
    return this._getTime() - this._startTime
  }

  getDelta(): number {
    const currentTime = this._getTime()
    const delta = currentTime - this._previousTime
    this._previousTime = currentTime
    return delta
  }
}
