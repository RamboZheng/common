var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var CleanWebpackPlugin = require('clean-webpack-plugin')
var entry = require("./config/entry.js")

module.exports = {
    //devtool: '#source-map',
    entry: {},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, 
                loader: "file-loader?name=res/[hash:8].[name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', 'css'], 
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'zepto$': 'n-zepto/n-zepto.js'
        }
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                jshint: {
                    'esversion': 6
                }
            }
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/res/*'
        }]),
        new webpack.ProvidePlugin({
            $: 'n-zepto'
        }),
        new ExtractTextPlugin("styles.css"),
        new CleanWebpackPlugin(['dist'],
            {
                root: __dirname,
                verbose: true,
                dry: false
            }
        )
    ]
}

//########################################################
var jsEntryMap = {}
var htmlEntryMap = []
for(var i=0; i<entry.entryFiles.length; i++) {
    var item = entry.entryFiles[i];
    
    if(item.js != undefined) {
        var jsname = path.basename(item.js, ".js");
        jsEntryMap[jsname] = item.js;
    }
    if(item.css != undefined) {
        var cssname = path.basename(item.css).replace(".", "");
        jsEntryMap[cssname] = item.css;
    }

    if(item.html != undefined) {
        var htmlname = path.basename(item.html);
        htmlEntryMap[i] = new HtmlWebpackPlugin({
            filename: htmlname,
            template: './src/test/'+htmlname,
            hash: true,
            inject: 'head',
            chunks: [jsname],
            css: ['']
        });
    }
}
module.exports.entry = jsEntryMap;
module.exports.plugins = module.exports.plugins.concat(htmlEntryMap)