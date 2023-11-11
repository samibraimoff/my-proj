declare module '*.scss' {
  type IClassNames = Record<string, string>
  const styles: IClassNames
  export = styles
}

declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';

declare module '*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare const IS_DEV: boolean
