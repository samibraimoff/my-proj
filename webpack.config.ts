import type webpack from 'webpack'
import path from 'path'
import { type BuildEnv, type BuildOptions } from './config/build/types'
import { buildWebpackConfig } from './config/build/build-webpack-config'

export default (env: BuildEnv): webpack.Configuration => {
  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 4040

  const options: BuildOptions = {
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src')
    },
    isDev,
    port: PORT
  }

  const config: webpack.Configuration = buildWebpackConfig(options)

  return config
}
