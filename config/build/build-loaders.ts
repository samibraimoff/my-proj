import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types'

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {

    const svgLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack'
            }
        ]
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader:'css-loader',
                options: {
                    modules: {
                         auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: options.isDev 
                        ? '[path][name]__[local]--[hash:base64:8]' 
                        : '[hash:base64:8]'
                    },
                }
            },
            'sass-loader'
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return [svgLoader, fileLoader, tsLoader, cssLoader]
}