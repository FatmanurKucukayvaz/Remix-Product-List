export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleNameMapper: {
    "^@web3-storage/(.*)$":
      "<rootDir>/node_modules/@web3-storage/$1/esm/src/index.js",
    "^~/(.*)$": "<rootDir>/app/$1",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@web3-storage|some-other-esm-module)/)",
  ],
};
