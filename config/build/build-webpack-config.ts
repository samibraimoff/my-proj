import webpack from 'webpack'
import { BuildOptions } from './types'
import { buildPlugins } from './build-plugins'
import { buildLoaders } from './build-loaders'
import { buildResolvers } from './build-resolvers'


export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths, isDev} = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash:8].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers()
    }
}