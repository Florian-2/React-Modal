var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};

// package.json
var package_exports = {};
__export(package_exports, {
  author: () => author,
  default: () => package_default,
  devDependencies: () => devDependencies,
  exports: () => exports,
  files: () => files,
  homepage: () => homepage,
  keywords: () => keywords,
  license: () => license,
  main: () => main,
  module: () => module,
  name: () => name,
  peerDependencies: () => peerDependencies,
  repository: () => repository,
  scripts: () => scripts,
  type: () => type,
  types: () => types,
  version: () => version
});
var name = "@florian21/react-simple-modal";
var version = "0.0.1";
var type = "module";
var scripts = {
  dev: "vite",
  build: "tsc && vite build",
  format: "prettier --write '**/*.{js,jsx,ts,tsx,json,css,scss,md}'",
  lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  preview: "vite preview",
  test: "jest --watchAll"
};
var files = [
  "dist"
];
var main = "./dist/react-simple-modal.umd.js";
var module = "./dist/react-simple-modal.es.js";
var types = "./dist/index.d.ts";
var exports = {
  ".": {
    import: {
      types: "./dist/index.d.ts",
      default: "./dist/react-simple-modal.es.js"
    },
    require: {
      types: "./dist/index.d.ts",
      default: "./dist/react-simple-modal.umd.js"
    }
  },
  "./dist/style.css": "./dist/style.css"
};
var peerDependencies = {
  react: ">=18",
  "react-dom": ">=18"
};
var devDependencies = {
  "@testing-library/jest-dom": "^6.1.4",
  "@testing-library/react": "^14.0.0",
  "@types/jest": "^29.5.7",
  "@types/node": "^20.8.10",
  "@types/react": "^18.2.15",
  "@types/react-dom": "^18.2.7",
  "@typescript-eslint/eslint-plugin": "^6.0.0",
  "@typescript-eslint/parser": "^6.0.0",
  "@vitejs/plugin-react": "^4.0.3",
  autoprefixer: "^10.4.16",
  clsx: "^2.0.0",
  eslint: "^8.45.0",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.3",
  jest: "^29.7.0",
  "jest-environment-jsdom": "^29.7.0",
  postcss: "^8.4.31",
  prettier: "^3.0.3",
  react: "^18.2.0",
  "react-dom": "^18.2.0",
  "tailwind-merge": "^2.0.0",
  tailwindcss: "^3.3.5",
  "ts-jest": "^29.1.1",
  "ts-node": "^10.9.1",
  typescript: "^5.0.2",
  vite: "^4.4.5",
  "vite-plugin-dts": "^3.6.3",
  "vite-tsconfig-paths": "^4.2.1"
};
var repository = {
  type: "git",
  url: "https://github.com/Florian-2/react-modal"
};
var keywords = [
  "react",
  "react-components",
  "ui",
  "modal",
  "dialog"
];
var author = "Florian";
var homepage = "https://github.com/Florian-2/react-modal#readme";
var license = "MIT";
var package_default = {
  name,
  version,
  type,
  scripts,
  files,
  main,
  module,
  types,
  exports,
  peerDependencies,
  devDependencies,
  repository,
  keywords,
  author,
  homepage,
  license
};

// vite.config.ts
import { defineConfig } from "file:///C:/Users/Florian/Documents/Openclassroom/modal/node_modules/.pnpm/vite@4.5.0_@types+node@20.8.10/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Florian/Documents/Openclassroom/modal/node_modules/.pnpm/@vitejs+plugin-react@4.1.0_vite@4.5.0/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsConfigPaths from "file:///C:/Users/Florian/Documents/Openclassroom/modal/node_modules/.pnpm/vite-tsconfig-paths@4.2.1_typescript@5.2.2_vite@4.5.0/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///C:/Users/Florian/Documents/Openclassroom/modal/node_modules/.pnpm/vite-plugin-dts@3.6.3_@types+node@20.8.10_typescript@5.2.2_vite@4.5.0/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\Florian\\Documents\\Openclassroom\\modal";
var vite_config_default = defineConfig({
  plugins: [react(), tsConfigPaths(), dts({ include: ["src/types"] })],
  resolve: {
    alias: {
      "@utils": path.resolve(__vite_injected_original_dirname, "./src/utils"),
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      "@types": path.resolve(__vite_injected_original_dirname, "./src/types/index.ts")
    }
  },
  build: {
    lib: {
      entry: path.resolve("src", "index.ts"),
      name: "react-simple-modal",
      formats: ["es", "umd"],
      fileName: (format) => `react-simple-modal.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(package_exports), "react", "react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZS5qc29uIiwgInZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibmFtZVwiOiBcIkBmbG9yaWFuMjEvcmVhY3Qtc2ltcGxlLW1vZGFsXCIsXG5cdFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG5cdFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuXHRcInNjcmlwdHNcIjoge1xuXHRcdFwiZGV2XCI6IFwidml0ZVwiLFxuXHRcdFwiYnVpbGRcIjogXCJ0c2MgJiYgdml0ZSBidWlsZFwiLFxuXHRcdFwiZm9ybWF0XCI6IFwicHJldHRpZXIgLS13cml0ZSAnKiovKi57anMsanN4LHRzLHRzeCxqc29uLGNzcyxzY3NzLG1kfSdcIixcblx0XHRcImxpbnRcIjogXCJlc2xpbnQgLiAtLWV4dCB0cyx0c3ggLS1yZXBvcnQtdW51c2VkLWRpc2FibGUtZGlyZWN0aXZlcyAtLW1heC13YXJuaW5ncyAwXCIsXG5cdFx0XCJwcmV2aWV3XCI6IFwidml0ZSBwcmV2aWV3XCIsXG5cdFx0XCJ0ZXN0XCI6IFwiamVzdCAtLXdhdGNoQWxsXCJcblx0fSxcblx0XCJmaWxlc1wiOiBbXG5cdFx0XCJkaXN0XCJcblx0XSxcblx0XCJtYWluXCI6IFwiLi9kaXN0L3JlYWN0LXNpbXBsZS1tb2RhbC51bWQuanNcIixcblx0XCJtb2R1bGVcIjogXCIuL2Rpc3QvcmVhY3Qtc2ltcGxlLW1vZGFsLmVzLmpzXCIsXG5cdFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuXHRcImV4cG9ydHNcIjoge1xuXHRcdFwiLlwiOiB7XG5cdFx0XHRcImltcG9ydFwiOiB7XG5cdFx0XHRcdFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2Rpc3QvcmVhY3Qtc2ltcGxlLW1vZGFsLmVzLmpzXCJcblx0XHRcdH0sXG5cdFx0XHRcInJlcXVpcmVcIjoge1xuXHRcdFx0XHRcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9kaXN0L3JlYWN0LXNpbXBsZS1tb2RhbC51bWQuanNcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCIuL2Rpc3Qvc3R5bGUuY3NzXCI6IFwiLi9kaXN0L3N0eWxlLmNzc1wiXG5cdH0sXG5cdFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJyZWFjdFwiOiBcIj49MThcIixcblx0XHRcInJlYWN0LWRvbVwiOiBcIj49MThcIlxuXHR9LFxuXHRcImRldkRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCI6IFwiXjYuMS40XCIsXG5cdFx0XCJAdGVzdGluZy1saWJyYXJ5L3JlYWN0XCI6IFwiXjE0LjAuMFwiLFxuXHRcdFwiQHR5cGVzL2plc3RcIjogXCJeMjkuNS43XCIsXG5cdFx0XCJAdHlwZXMvbm9kZVwiOiBcIl4yMC44LjEwXCIsXG5cdFx0XCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMi4xNVwiLFxuXHRcdFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4yLjdcIixcblx0XHRcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjYuMC4wXCIsXG5cdFx0XCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjYuMC4wXCIsXG5cdFx0XCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiOiBcIl40LjAuM1wiLFxuXHRcdFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMTZcIixcblx0XHRcImNsc3hcIjogXCJeMi4wLjBcIixcblx0XHRcImVzbGludFwiOiBcIl44LjQ1LjBcIixcblx0XHRcImVzbGludC1wbHVnaW4tcmVhY3QtaG9va3NcIjogXCJeNC42LjBcIixcblx0XHRcImVzbGludC1wbHVnaW4tcmVhY3QtcmVmcmVzaFwiOiBcIl4wLjQuM1wiLFxuXHRcdFwiamVzdFwiOiBcIl4yOS43LjBcIixcblx0XHRcImplc3QtZW52aXJvbm1lbnQtanNkb21cIjogXCJeMjkuNy4wXCIsXG5cdFx0XCJwb3N0Y3NzXCI6IFwiXjguNC4zMVwiLFxuXHRcdFwicHJldHRpZXJcIjogXCJeMy4wLjNcIixcblx0XHRcInJlYWN0XCI6IFwiXjE4LjIuMFwiLFxuXHRcdFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiLFxuXHRcdFwidGFpbHdpbmQtbWVyZ2VcIjogXCJeMi4wLjBcIixcblx0XHRcInRhaWx3aW5kY3NzXCI6IFwiXjMuMy41XCIsXG5cdFx0XCJ0cy1qZXN0XCI6IFwiXjI5LjEuMVwiLFxuXHRcdFwidHMtbm9kZVwiOiBcIl4xMC45LjFcIixcblx0XHRcInR5cGVzY3JpcHRcIjogXCJeNS4wLjJcIixcblx0XHRcInZpdGVcIjogXCJeNC40LjVcIixcblx0XHRcInZpdGUtcGx1Z2luLWR0c1wiOiBcIl4zLjYuM1wiLFxuXHRcdFwidml0ZS10c2NvbmZpZy1wYXRoc1wiOiBcIl40LjIuMVwiXG5cdH0sXG5cdFwicmVwb3NpdG9yeVwiOiB7XG5cdFx0XCJ0eXBlXCI6IFwiZ2l0XCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vRmxvcmlhbi0yL3JlYWN0LW1vZGFsXCJcblx0fSxcblx0XCJrZXl3b3Jkc1wiOiBbXG5cdFx0XCJyZWFjdFwiLFxuXHRcdFwicmVhY3QtY29tcG9uZW50c1wiLFxuXHRcdFwidWlcIixcblx0XHRcIm1vZGFsXCIsXG5cdFx0XCJkaWFsb2dcIlxuXHRdLFxuXHRcImF1dGhvclwiOiBcIkZsb3JpYW5cIixcblx0XCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9GbG9yaWFuLTIvcmVhY3QtbW9kYWwjcmVhZG1lXCIsXG5cdFwibGljZW5zZVwiOiBcIk1JVFwiXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEZsb3JpYW5cXFxcRG9jdW1lbnRzXFxcXE9wZW5jbGFzc3Jvb21cXFxcbW9kYWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEZsb3JpYW5cXFxcRG9jdW1lbnRzXFxcXE9wZW5jbGFzc3Jvb21cXFxcbW9kYWxcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0Zsb3JpYW4vRG9jdW1lbnRzL09wZW5jbGFzc3Jvb20vbW9kYWwvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgKiBhcyBwYWNrYWdlSnNvbiBmcm9tIFwiLi9wYWNrYWdlLmpzb25cIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgdHNDb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xyXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblx0cGx1Z2luczogW3JlYWN0KCksIHRzQ29uZmlnUGF0aHMoKSwgZHRzKHsgaW5jbHVkZTogW1wic3JjL3R5cGVzXCJdIH0pXSxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRhbGlhczoge1xyXG5cdFx0XHRcIkB1dGlsc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3V0aWxzXCIpLFxyXG5cdFx0XHRcIkBjb21wb25lbnRzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvY29tcG9uZW50c1wiKSxcclxuXHRcdFx0XCJAdHlwZXNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy90eXBlcy9pbmRleC50c1wiKSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRidWlsZDoge1xyXG5cdFx0bGliOiB7XHJcblx0XHRcdGVudHJ5OiBwYXRoLnJlc29sdmUoXCJzcmNcIiwgXCJpbmRleC50c1wiKSxcclxuXHRcdFx0bmFtZTogXCJyZWFjdC1zaW1wbGUtbW9kYWxcIixcclxuXHRcdFx0Zm9ybWF0czogW1wiZXNcIiwgXCJ1bWRcIl0sXHJcblx0XHRcdGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgcmVhY3Qtc2ltcGxlLW1vZGFsLiR7Zm9ybWF0fS5qc2AsXHJcblx0XHR9LFxyXG5cdFx0cm9sbHVwT3B0aW9uczoge1xyXG5cdFx0XHRleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKHBhY2thZ2VKc29uKSwgXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcclxuXHRcdFx0b3V0cHV0OiB7XHJcblx0XHRcdFx0Z2xvYmFsczoge1xyXG5cdFx0XHRcdFx0cmVhY3Q6IFwicmVhY3RcIixcclxuXHRcdFx0XHRcdFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQyxXQUFRO0FBQ1IsY0FBVztBQUNYLFdBQVE7QUFDUixjQUFXO0FBQUEsRUFDVixLQUFPO0FBQUEsRUFDUCxPQUFTO0FBQUEsRUFDVCxRQUFVO0FBQUEsRUFDVixNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxNQUFRO0FBQ1Q7QUFDQSxZQUFTO0FBQUEsRUFDUjtBQUNEO0FBQ0EsV0FBUTtBQUNSLGFBQVU7QUFDVixZQUFTO0FBQ1QsY0FBVztBQUFBLEVBQ1YsS0FBSztBQUFBLElBQ0osUUFBVTtBQUFBLE1BQ1QsT0FBUztBQUFBLE1BQ1QsU0FBVztBQUFBLElBQ1o7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
