import { nextImages } from 'image-loader-next/rollup'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [nextImages()],
  test: {
    include: ['test/vitest.ts']
  }
})
