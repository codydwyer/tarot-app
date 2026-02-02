import type {Config} from 'jest';

const config: Config = {
  
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { diagnostics: { ignoreCodes: ['TS151001'] } }],
  },
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