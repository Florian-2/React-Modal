/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"^@utils/(.*)$": "<rootDir>/src/utils/$1",
		"^@components/(.*)$": "<rootDir>/src/components/$1",
		"^@types/(.*)$": "<rootDir>/src/types/$1",
	},
};
