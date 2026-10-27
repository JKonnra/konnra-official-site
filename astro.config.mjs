import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://konnra.com',
  output: 'static',
  build: {
    format: 'directory'
  }
});
