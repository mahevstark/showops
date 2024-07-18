module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)?$': ['babel-jest', { configFile: './babel-jest.config.js' }],
    },
    testEnvironment: 'jsdom',
    // setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupTests.js'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
};
