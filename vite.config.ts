import * as packageJson from "./package.json";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsConfigPaths(),
		dts({ include: ["src/components/", "src/types", "src/index.ts"] }),
	],
	resolve: {
		alias: {
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@types": path.resolve(__dirname, "./src/types/index.ts"),
		},
	},
	build: {
		lib: {
			entry: path.resolve("src", "index.ts"),
			name: "react-simple-modal",
			formats: ["es"],
			fileName: "index",
		},
		rollupOptions: {
			external: [
				...Object.keys(packageJson.peerDependencies),
				"react",
				"react-dom",
			],
			output: {
				globals: {
					react: "react",
					"react-dom": "ReactDOM",
				},
				intro: 'import "./style.css";',
			},
		},
	},
});
