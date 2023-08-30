/** @type {import('jest').Config} */
export default {
  testEnvironment: 'jsdom',
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      lines: 80
    }
  },
  injectGlobals: true,
  transform: {}
}
