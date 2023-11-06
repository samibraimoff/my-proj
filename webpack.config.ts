import webpack from 'webpack'
import path from 'path'
import { BuildOptions } from './config/build/types';
import { buildWebpackConfig } from './config/build/build-webpack-config';

const mode = 'development'
const isDev = mode === 'development'

const options: BuildOptions = {
    mode: 'development',
    paths: {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    },
    isDev
}


const config: webpack.Configuration = buildWebpackConfig(options)

export default config;