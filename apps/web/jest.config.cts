const nextJest = require('next/jest.js');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  displayName: 'web',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/web',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  // Transform ESM modules
  transformIgnorePatterns: [
    'node_modules/(?!(next-intl|use-intl)/)',
  ],
  // Mock next-intl and @portfolio/ui for tests
  moduleNameMapper: {
    '^next-intl$': '<rootDir>/src/__mocks__/next-intl.tsx',
    '^next-intl/(.*)$': '<rootDir>/src/__mocks__/next-intl.tsx',
    '^@portfolio/ui$': '@portfolio/ui/testing',
  },
};

module.exports = createJestConfig(config);
