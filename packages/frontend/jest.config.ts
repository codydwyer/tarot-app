import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { diagnostics: { ignoreCodes: ['TS151001'] } }],
    '^.+\\.(css|scss|sass)$': 'jest-transform-css'
  },
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@graphql/(.*)$': '<rootDir>/src/graphql/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@layout/(.*)$': '<rootDir>/src/layout/$1',
    '^@redux/(.*)$': '<rootDir>/src/redux/$1',
    '^@setup/(.*)$': '<rootDir>/src/setup/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/coverage/**',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};

export default config;