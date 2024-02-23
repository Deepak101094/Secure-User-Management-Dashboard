const { defineConfig } = require("jest-config-vite");

module.exports = defineConfig({
	// Add any Jest configurations if needed
	preset: "ts-jest",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
});
