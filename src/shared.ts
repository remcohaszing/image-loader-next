import { relative } from 'node:path'

import { imageSizeFromFile } from 'image-size/fromFile'

/**
 * A regular expression to match image files supported by Next.js.
 */
export const defaultInclude = /\.(avif|bmp|gif|ico|jpeg|jpg|png|svg|webp)$/

/**
 * Get the source code for an image path.
 *
 * @param path
 *   The file path to load.
 * @param cwd
 *   The directory to generate the `src` property relative to.
 * @returns
 *   A string containing the source code.
 */
export async function getSource(path: string, cwd = process.cwd()): Promise<string> {
  const { height, width } = await imageSizeFromFile(path)

  return (
    `export const src = ${JSON.stringify(relative(cwd, path))}\n` +
    `export const width = ${width}\n` +
    `export const height = ${height}\n` +
    'export default { src, width, height }\n'
  )
}
