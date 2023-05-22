module.exports = {
    roots: ['<rootDir>/tests/unit'],
    testMatch: ['**/*.test.js'],
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  };
  