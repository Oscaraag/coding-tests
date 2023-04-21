module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.(ts|js)'],
  moduleFileExtensions: ['ts', 'js'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
}
