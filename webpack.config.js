const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    target: "web",
    // mode: 'production',
    cache: true,
    // devtool: 'cheap-module-source-map',
    devtool: 'source-map',
    entry: {
        app: ["@babel/polyfill", path.join(__dirname, '/js/app.js')],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sourceMapContents: false
                        }
                    }
                ],
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    externals: {
        jquery: 'jQuery'
    },
    resolve: {
        alias: {
            index: path.resolve(__dirname, 'js/index.js')
        }
    },
    optimization: {

        //  runtimeChunk: 'single'
        // runtimeChunk: 'single',
        // splitChunks: {
        //     cacheGroups: {
        //         vendor: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name: 'vendors',
        //             chunks: 'all'
        //         }
        //     }
        // },

        minimizer: [
            // new UglifyJsPlugin({
            // 	cache: true,
            // 	parallel: true,
            // 	sourceMap: false
            // }),
            // new OptimizeCSSAssetsPlugin({})
        ]

    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/app.css'
        })
    ]
};