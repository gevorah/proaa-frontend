/** @type {import('jest').Config} */
export default {
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      lines: 80
    }
  },
  injectGlobals: true,
  transform: {}
}
