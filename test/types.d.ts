declare module '*.svg' {
  const image: {
    src: string
    width: string
    height: string
  }

  export const src: string
  export const width: string
  export const height: string
  export default image
}
