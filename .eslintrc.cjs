module.exports = {
  root: true,
  // Run environments
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  // Installed Plugins
  plugins: ["@typescript-eslint"],
  // Parser Configuration
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  // Code Expectations/rules
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  ignorePatterns: ["src/**/*.test.ts", "lib/*"],
};
