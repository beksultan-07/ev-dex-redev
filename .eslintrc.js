module.exports = {
	sapce: true,
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
		"quotes": ["error", "double"],
		"jsx-quotes": ["error", "prefer-double"],
		"no-console": "warn",
	},
};
