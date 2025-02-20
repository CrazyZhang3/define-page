declare namespace globalThis {
  export const definePage: typeof import('.').definePage;
}

declare module 'virtual:define-page' {
  import { PagesJson } from './src';

  export default PagesJson;
}
