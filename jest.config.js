module.exports = {
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/styles.{js,ts}',
    '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/stories.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
  ],
  //Resolveu:
  //https://stackoverflow.com/questions/50171412/jest-typescript-absolute-paths-baseurl-gives-error-cannot-find-module
  moduleDirectories: ['node_modules', 'src'],

  // moduleNameMapper: {
  //   /* Handle CSS imports (with CSS modules)
  //   https://jestjs.io/docs/webpack#mocking-css-modules */
  //   // '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

  //   // Handle CSS imports (without CSS modules)
  //   // '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

  //   /* Handle image imports
  //   https://jestjs.io/docs/webpack#handling-static-assets */
  //   // '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',

  //   'src/(.*)': '<rootDir>/src/$1',
  // },

  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.out/', '/public/'],

  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
};
