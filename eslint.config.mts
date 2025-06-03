import { defineConfig } from "eslint/config"
import globals from "globals"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename: string = fileURLToPath(import.meta.url)
const __dirname: string = path.dirname(__filename)
const compat: FlatCompat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

export default defineConfig([{
    extends: compat.extends("eslint:recommended", "prettier"),

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: "latest",
        sourceType: "module",
    },
}])
