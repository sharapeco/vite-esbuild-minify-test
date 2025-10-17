import { defineConfig } from "vite";

export default defineConfig({
	esbuild: {
		drop: ["debugger"],

		// 何も起きない
		minifyIdentifiers: true,
		minifySyntax: true,
		minifyWhitespace: true,
	},
	build: {
		lib: {
			entry: "src/main.ts",
			name: "MyLib",
			formats: ["es"],
			fileName: "my-lib",
		},
		minify: "esbuild",
		outDir: "dist",
		emptyOutDir: true,
		rollupOptions: {
			output: {
				format: "es",

				// 何も起きない
				compact: true,
				indent: false,
			},
		},
	},
});
