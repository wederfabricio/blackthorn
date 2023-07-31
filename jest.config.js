/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  },
  modulePathIgnorePatterns: ["dist"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/test.[jt]s?(x)"
  ]

};