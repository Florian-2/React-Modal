/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"^@utils/(.*)$": "<rootDir>/src/utils/$1",
		"^@components/(.*)$": "<rootDir>/src/components/$1",
		"^@types/(.*)$": "<rootDir>/src/types/$1",
	},
	transformIgnorePatterns: ["node_modules/(?!(@uidotdev/usehooks)/)"],
	setupFilesAfterEnv: ["<rootDir>/src/jest-setup.ts"],
};
