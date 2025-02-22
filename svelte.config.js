import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(), // Use Vercel adapter
    alias: {
      $lib: 'src/lib', // Allows importing from $lib instead of long paths
    },
  },
};

export default config;
