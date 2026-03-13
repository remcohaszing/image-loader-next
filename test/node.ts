import type { NextImagesData } from 'image-loader-next/node'

import assert from 'node:assert/strict'
import { register } from 'node:module'
import { test } from 'node:test'

register<NextImagesData>('image-loader-next/node', import.meta.url)

test('import image', async () => {
  const img = await import('./example.svg')

  assert.deepEqual(
    { ...img },
    {
      src: 'test/example.svg',
      width: 640,
      height: 480,
      default: {
        src: 'test/example.svg',
        width: 640,
        height: 480
      }
    }
  )
})
