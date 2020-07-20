module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  errorOnDeprecated: true,
  maxWorkers: '80%',
  preset: 'ts-jest',
  resetMocks: true,
  restoreMocks: true,
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  verbose: true,
};
