import type webpack from 'webpack'
import { type BuildOptions } from './types'

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}
