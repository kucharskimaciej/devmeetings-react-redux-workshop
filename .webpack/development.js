import webpack from 'webpack';
import baseConfig, {ENVIROMENT} from './base';

import pkg from '../package.json';

const env = Object.assign({}, ENVIROMENT, process.env);

const ENV_VARIABLES = new webpack.DefinePlugin({
    __DEV__: true,
    __PROD__: false,
    ...Object.keys(env).reduce(($, key) => {
        $[`ENV_${key}`] = JSON.stringify(env[key]);
        return $;
    }, {})
});

export default {
    ...baseConfig,
    entry: {
        app: baseConfig.entry
    },
    devtool: 'source-map',

    plugins: [
        ...baseConfig.plugins,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        ENV_VARIABLES,
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "*"
        }
    }
};