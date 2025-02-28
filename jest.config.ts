import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        babel: true,
        tsconfig: "./tsconfig.jest.json",
      },
    ],
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        babel: true,
        tsconfig: "./tsconfig.jest.json",
      },
    ],
    "^.+\\.js?$": "babel-jest",
    "^.+\\.jsx?$": "babel-jest",
    "^.+.tsx?$": ["ts-jest", {}],
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
