import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types'

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({
            template: options.paths.html
        }),
        new webpack.ProgressPlugin()
    ]
}