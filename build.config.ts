import process from 'node:process';
import { defineBuildConfig } from 'unbuild';

const isDev = process.env.NODE_ENV === 'development';

export default defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    esbuild: {
      minify: !isDev,
    },
  },
  externals: ['vite'],
  failOnWarn: false,
  sourcemap: isDev,
});
