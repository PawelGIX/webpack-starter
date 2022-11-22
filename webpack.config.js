const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const chalk = require('chalk');
// https://www.npmjs.com/package/webpack-build-notifier
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');




module.exports = env => {

    function isProd() {
        // return process.env.NODE_ENV === 'production';
        return env.mode === 'production';
    }

    function loadPlugins() {
        // default
        var plugins = [
            new MiniCssExtractPlugin({
                filename: 'app.css'
            }),
            // https://github.com/cascornelissen/svg-spritemap-webpack-plugin
            new SVGSpritemapPlugin('svg-icons/**/*.svg')
        ];

        // add production only
        if (isProd()) {
            plugins.push(new OptimizeCSSAssetsPlugin({}));
        }
        if (!isProd()) {
            plugins.push(
                // https://www.npmjs.com/package/webpack-build-notifier
                new WebpackBuildNotifierPlugin({
                    title: "Sparmed.dk",
                    // logo: path.resolve("./img/favicon.png"),
                    sound: false,
                    compilationSound: false,
                    successSound: false,
                    failureSound: true,
                    showDuration: true,
                    suppressSuccess: false, // don't spam success notifications
                })
            );
        }

        return plugins;
    }

    const info = chalk.blue.inverse;
    const error = chalk.red.inverse;

    console.log(info(`\nMode: ${isProd()?'prod':'dev'}\n`));


    var webpackConfig = {
        target: "web",
        // mode: 'production',
        cache: true,
        // devtool: 'cheap-module-source-map',
        devtool: isProd() ? 'source-map' : 'cheap-module-source-map',
        entry: {
            app: ["@babel/polyfill", path.join(__dirname, 'js/app.js')],
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            // publicPath: './',
            filename: '[name].js',
            pathinfo: false,
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
                                url: false,
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
                                // root:''
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                // Prefer `dart-sass`
                                implementation: require("sass"),
                            }
                        }
                    ],
                },

                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [{
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                // publicPath:'./'
                            }
                        }

                    ]
                }
            ]
        },

        externals: {
            jquery: 'jQuery'
        },
        resolve: {

            alias: {
                index: path.resolve(__dirname, 'js/index.js'),

                "jquery": path.resolve('node_modules', 'jquery/dist/jquery.js'),
                "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
                "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
                "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
                "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
                "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
                "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
                "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
                "MorphSVGPlugin": path.resolve('./js/gsap/MorphSVGPlugin.min.js'),
            }
        },
        optimization: {
            // runtimeChunk: true,
            minimize: isProd(),
            moduleIds: 'named',
            chunkIds: 'named',
            removeAvailableModules: isProd(),
            removeEmptyChunks: isProd(),
            splitChunks: isProd(),
            // chunkIds: 'named',
            // runtimeChunk: 'single',
            // splitChunks: {
            //     name:true,
            //     // chunks: 'async',
            //     // cacheGroups: {
            //     //     vendor: {
            //     //         test: /[\\/]node_modules[\\/]/,
            //     //         name: 'vendors',
            //     //         chunks: 'all'
            //     //     }
            //     // }
            // },


        },
        plugins: loadPlugins()
    };
    return webpackConfig;
    // return smp.wrap(webpackConfig);
}
