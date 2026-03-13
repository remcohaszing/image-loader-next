import type { InitializeHook, LoadHook } from 'node:module'

import { fileURLToPath } from 'node:url'

import { defaultInclude, getSource } from './shared.ts'

export interface NextImagesData {
  /**
   * The directory to generate the `src` property relative to.
   *
   * @default process.cwd()
   */
  cwd?: string | undefined

  /**
   * A regular expression to test the import path against.
   */
  include?: RegExp | undefined
}

let options: NextImagesData

export const load: LoadHook = async (url, context, nextLoad) => {
  const { protocol } = new URL(url)
  if (protocol !== 'file:') {
    return nextLoad(url, context)
  }

  const path = fileURLToPath(url)
  const include = options?.include ?? defaultInclude

  if (!include.test(path)) {
    return nextLoad(url, context)
  }

  return {
    format: 'module',
    shortCircuit: true,
    source: await getSource(path, options?.cwd)
  }
}

export const initialize: InitializeHook<NextImagesData> = (data) => {
  options = data
}
