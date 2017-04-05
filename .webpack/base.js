import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {resolve} from 'path';
import {EscapeHtml} from './plugins/pug-escape';
import dotenv from 'dotenv';

export const ENVIROMENT = dotenv.config({
    path: process.env.PWD + '/.env'
}) || {};

const config = {
    entry: './app/index',
    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.css', '.sass', '.scss', '.html', '.json'],
        descriptionFiles: ['package.json'],
        modules: [
            resolve(__dirname, '../app'),
            resolve(__dirname, '../app', 'core'),
            'node_modules',
            'bower_components'
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.pug',
        }),
        new ExtractTextPlugin({ filename: 'bundle_[contenthash].css', allChunks: true })
    ],
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader?presets[]=es2015&presets[]=stage-1'], exclude: /node_modules/ },
            { test: /\.html$/, loaders: [
                {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src'],
                        root: resolve(__dirname, '..', 'app', 'public')
                    }
                }
            ]},
            { test: /\.pug$/, loaders: [
                {
                    loader: 'pug-loader',
                    options: {
                        filters: {
                            escape: EscapeHtml
                        }
                    }
                }
            ]},
            { test: /\.(png|jpe?g|gif)$/, loader: 'url-loader?limit=8192' },
            {
                test: /\.s(a|c)ss/,
                loaders: ExtractTextPlugin.extract({
                    loader: ['css-loader', 'sass-loader', 'import-glob-loader']
                })
            },
            { test: /\.css$/, loader: 'css-loader'},
            /* fonts */
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};

export default config;
