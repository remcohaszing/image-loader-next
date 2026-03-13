import type * as rollup from 'rollup'

import { defaultInclude, getSource } from './shared.ts'

type Filter = (RegExp | string)[] | RegExp | string

/**
 * A Rollup plugin.
 */
interface Plugin {
  /**
   * The name of the plugin.
   */
  name: string
}

export namespace nextImages {
  export interface Options {
    /**
     * The directory to generate the `src` property relative to.
     *
     * @default process.cwd()
     */
    cwd?: string | undefined

    /**
     * A filter of glob patterns and regular expressions to include.
     *
     * @default /\.(png|svg|jpg|jpeg|gif|webp|avif|ico|bmp)$/
     */
    include?: Filter | undefined

    /**
     * A filter of glob patterns and regular expressions to exclude.
     */
    exclude?: Filter | undefined
  }
}

/**
 * A rollup plugin to import images the same way as Next.js.
 *
 * @param options
 *   Options to configure the plugin.
 * @returns
 *   A rollup plugin that transforms image imports.
 */
export function nextImages(options: nextImages.Options = {}): Plugin {
  const { cwd, exclude, include = defaultInclude } = options

  const plugin: rollup.Plugin = {
    name: 'image-loader-next/rollup',
    load: {
      order: 'pre',
      filter: { id: { include, exclude } },
      async handler(id) {
        const [path] = id.split('?')

        return {
          code: await getSource(path, cwd)
        }
      }
    }
  }

  return plugin
}
