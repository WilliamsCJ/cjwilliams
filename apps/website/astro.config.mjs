import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), db()]
});