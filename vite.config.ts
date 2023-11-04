import * as packageJson from "./package.json";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@utils": "/src/utils",
			"@components": "/src/components",
			"@types": "/src/types/index.ts",
		},
	},
	plugins: [react(), tsConfigPaths(), dts({ include: ["src/types"] })],
	build: {
		lib: {
			entry: path.resolve("src", "index.ts"),
			name: "react-simple-modal",
			formats: ["es", "umd"],
			fileName: (format) => `react-simple-modal.${format}.js`,
		},
		rollupOptions: {
			external: [...Object.keys(packageJson), "react", "react-dom"],
			output: {
				globals: {
					react: "react",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
