import { defineConfig } from '@rewordlabs/dev'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '.', '.env') })

export default defineConfig({
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  projectLocale: 'en',
  outDir: './src/locale',
  openaiApiKey: process.env.OPENAI_API_KEY as string,
  locales: ['es'],
})
