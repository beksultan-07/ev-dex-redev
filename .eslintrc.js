module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:react/recommended",
		"xo",
	],
	overrides: [
		{
			extends: [
				"xo-typescript",
			],
			files: [
				"*.ts",
				"*.tsx",
			],
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: [
		"react",
	],
	rules: {
		quotes: ["error", "double"],
		"no-unused-vars": "warn",
		"jsx-quotes": ["error", "prefer-double"],
		"no-console": "warn",
		"capitalized-comments": "off",
	},
};
