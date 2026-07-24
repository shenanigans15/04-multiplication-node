import type { Config } from 'jest'

const config: Config = {
  coverageProvider: 'v8',

  preset: 'ts-jest',

  testEnvironment: 'jest-environment-node',

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.test.json',
      },
    ],
  },
}

export default config
