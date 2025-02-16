import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    entry: ['src/index.ts'],
    external: ['vite'],
    dts: true,
    outDir: 'dist',
    format: ['cjs', 'esm'],
    platform: 'node',
    target: 'es2017',
    minify: !options.watch,
    sourcemap: !!options.watch,
    replaceNodeEnv: true,
  };
});
