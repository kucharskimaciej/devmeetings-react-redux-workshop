import webpack from 'webpack';
import baseConfig, {ENVIROMENT} from './base';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import {resolve} from 'path';

import pkg from '../package.json';

const ENV_VARIABLES = new webpack.DefinePlugin({
    __DEV__: false,
    __PROD__: true,
    ENV: {
        ...Object.assign({}, ENVIROMENT, process.env)
    }
});


export default {
    ...baseConfig,
    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'bundle_[hash].js'
    },
    entry: {
        app: baseConfig.entry
    },
    plugins: [
        ...baseConfig.plugins,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle_[hash].js',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        ENV_VARIABLES,
        new webpack.LoaderOptionsPlugin({
            debug: false
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: true
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: false
        }),

    ]
};