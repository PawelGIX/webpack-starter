const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const chalk = require('chalk');



module.exports = env => {

function isProd(){
    // return process.env.NODE_ENV === 'production';
    return  env.mode === 'production';
}

function loadPlugins(){
    // default
    var plugins = [
        new MiniCssExtractPlugin({
            filename: './css/app.css'
        })
    ];

    // add production only
    if( isProd() ){
        plugins.push(new OptimizeCSSAssetsPlugin({}));
    }

    return plugins;
}

const info = chalk.blue.inverse;
const error = chalk.red.inverse;

console.log(info(`\nMode: ${env.mode} : ${isProd()?'prod':'dev'}\n` ));


return  {
    target: "web",
    // mode: 'production',
    cache: true,
    // devtool: 'cheap-module-source-map',
    devtool: 'source-map',
    entry: {
        app: ["@babel/polyfill", path.join(__dirname, 'js/app.js')],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/',
        filename: '[name].js'
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
                            // Prefer `dart-sass`
                            implementation: require("sass"),
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
            index: path.resolve(__dirname, 'js/index.js'),
            
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
        
        minimize: isProd(),
        moduleIds: 'named',
        chunkIds: 'named',
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
}