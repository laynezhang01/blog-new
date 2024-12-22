import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {zhHansLocale} from '@sanity/locale-zh-hans'
import {schemaTypes} from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'lin-blog-cms',

  projectId: 'hr0f3zrc',
  dataset: 'production',

  plugins: [zhHansLocale(), structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
