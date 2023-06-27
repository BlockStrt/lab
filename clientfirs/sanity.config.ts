import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { media } from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'clientfirs',

  projectId: '7ezulpzq',
  dataset: 'production',

  plugins: [deskTool(),  media()],

  schema: {
    types: schemaTypes,
  },
})
