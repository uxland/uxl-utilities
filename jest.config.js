module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./test/setup.ts'],
  transformIgnorePatterns: [],
  transform: {
    '^.+\\\\node_modules\\\\lit-element\\\\.*?\\\\*?.js$': 'ts-jest',
    '^.+\\node_modules\\lit-element\\.*?\\*?.js$': 'ts-jest',
    '^.+/node_modules/lit-element/.*?/*?.js$': 'ts-jest',
    '^.+\\\\node_modules\\\\lit-html\\\\.*?\\\\*?.js$': 'ts-jest',
    '^.+\\node_modules\\lit-html\\.*?\\*?.js$': 'ts-jest',
    '^.+/node_modules/lit-html/.*?/*?.js$': 'ts-jest',
    '^.+\\\\node_modules\\\\.*?\\\\es\\\\.*?\\\\*?.js$': 'ts-jest',
    '^.+\\node_modules\\.*?\\es\\.*?\\*?.js$': 'ts-jest',
    '^.+/node_modules/.*?/es/.*?/*?.js$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+.ts$': 'ts-jest'
  },
  coverageReporters: ['json-summary', 'text', 'lcov'],
  collectCoverage: true
};