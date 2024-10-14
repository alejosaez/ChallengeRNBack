module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.ts'],
    clearMocks: true,
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], 
    transform: {
      '^.+\\.tsx?$': 'babel-jest', 
    },
  };
  