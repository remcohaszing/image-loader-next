# image-loader-next

[![github actions](https://github.com/remcohaszing/image-loader-next/actions/workflows/ci.yaml/badge.svg)](https://github.com/remcohaszing/image-loader-next/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/remcohaszing/image-loader-next/branch/main/graph/badge.svg)](https://codecov.io/gh/remcohaszing/image-loader-next)
[![npm version](https://img.shields.io/npm/v/image-loader-next)](https://www.npmjs.com/package/image-loader-next)
[![npm downloads](https://img.shields.io/npm/dm/image-loader-next)](https://www.npmjs.com/package/image-loader-next)

Load images in Node.js, Rollup, Vite, or Vitest the same way as Next.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Vite](#vite)
  - [Node.js](#nodejs)
- [API](#api)
  - [`image-loader-next/node`](#image-loader-nextnode)
  - [`image-loader-next/rollup`](#image-loader-nextrollup)
- [Compatibility](#compatibility)
- [License](#license)

## Installation

```sh
npm install image-loader-next
```

## Usage

This package exposes two entrypoints. The `image-loader-next/rollup` export exposes a Rollup plugin,
which is compatible with both Rollup, Vite, and Vitest. The `image-loader-next/node` export exposes
a Node.js loader.

The generated image modules expose the properties `src`, `width`, and `height`, and a `default`
export that contains all of these as properties.

### Vite

To use this project with Vite or Vitest, add it to your
[`plugins`](https://vite.dev/config/shared-options#plugins) array.

```js
import { nextImages } from 'image-loader-next/rollup'
import { defineConfig } from 'vite/config'

export default defineConfig({
  plugins: [nextImages()]
})
```

### Node.js

To use this project with Node.js, register it using the
[`register`](https://nodejs.org/api/module.html#moduleregisterspecifier-parenturl-options) function

```js
import { register } from 'node:module'

register('image-loader-next/node', import.meta.url)
```

Or register it via the `--loader` option.

```sh
node --loader image-loader-next
```

## API

### `image-loader-next/node`

A Node.js loader.

#### Initialize data

- `cwd` (`string`) — The directory to generate the `src` property relative to. (Default:
  `process.cwd()`)
- `include` (`RegExp`) — A regular expression to test the import path against. (Default:
  `/\.(png|svg|jpg|jpeg|gif|webp|avif|ico|bmp)$/`)

### `image-loader-next/rollup`

#### `nextImages(options)`

A rollup plugin to import images the same way as Next.js.

##### Options

- `cwd` (`string`) — The directory to generate the `src` property relative to. (Default:
  `process.cwd()`)
- `include` (`string | RegExp | (string | RegExp)[]`) — A filter of glob patterns and regular
  expressions to include. (Default: `/\.(png|svg|jpg|jpeg|gif|webp|avif|ico|bmp)$/`)
- `exclude` (`string | RegExp | (string | RegExp)[]`) — A filter of glob patterns and regular
  expressions to exclude. (Optional)

## Compatibility

This project is compatible with Node.js 22 or greater.

## License

[MIT](LICENSE.md) © [Remco Haszing](https://github.com/remcohaszing)
