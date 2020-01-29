module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      diagnostics: true
    }
  },
  moduleFileExtensions: ["ts", "js", "tsx", "jsx"],
  moduleNameMapper: {
    "^src/(.*)": "<rootDir>/src/$1",
    "^components/(.*)": "<rootDir>/src/components/$1",
    "^container/(.*)": "<rootDir>/src/container/$1",
    "^assets/(.*)": "<rootDir>/src/assets/$1",
    "^data/(.*)": "<rootDir>/src/data/$1",
    "^actions/(.*)": "<rootDir>/src/data/actions/$1",
    "^reducers/(.*)": "<rootDir>/src/data/reducers/$1",
    "^middleware/(.*)": "<rootDir>/src/data/middleware/$1",
    "^utils/(.*)": "<rootDir>/src/utils/$1"
  },
  transformIgnorePatterns: ["./node_modules/"],
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/test/**/*.test.(ts|tsx)"],
  testEnvironment: "node",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["./src/test/setUpTest.ts"]
};
