import webpack from 'webpack'
import { BuildOptions } from './types'
import { buildPlugins } from './build-plugins'
import { buildLoaders } from './build-loaders'
import { buildResolvers } from './build-resolvers'
import { buildDevServer } from './build-dev-server'


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
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}