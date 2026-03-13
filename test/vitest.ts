import { expect, test } from 'vitest'

test('import image', async () => {
  const img = await import('./example.svg')

  expect({ ...img }).toEqual({
    src: 'test/example.svg',
    width: 640,
    height: 480,
    default: {
      src: 'test/example.svg',
      width: 640,
      height: 480
    }
  })
})
