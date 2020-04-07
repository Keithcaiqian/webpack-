// const path = require('path')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     mode: 'development',
//     entry: './src/main.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js',
//         // publicPath: 'dist/'  因为用了html-webpack-plugin 所以不需要这个配置了
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             },
//             {
//                 test: /\.less$/,
//                 use: [{
//                     loader: "style-loader" // creates style nodes from JS strings
//                 }, {
//                     loader: "css-loader" // translates CSS into CommonJS
//                 }, {
//                     loader: "less-loader" // compiles Less to CSS
//                 }]
//             },
//             {
//                 test: /\.(png|jpg|gif)$/,
//                 use: [
//                     {
//                         loader: 'url-loader',
//                         options: {
//                             // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式.
//                             // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载.
//                             limit: 8000,
//                             name: 'img/[name][hash:5].[ext]'
//                         }
//                     }
//                 ]
//             },
//             {
//                 test: /\.js$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env']
//                     }
//                 }
//             },
//             {
//                 test: /\.vue$/,
//                 loader: 'vue-loader'
//             }
//         ]
//     },
//     plugins: [
//         // 请确保引入这个插件！
//         new VueLoaderPlugin(),
//         // 为每个 chunk 文件头部添加 banner。
//         new webpack.BannerPlugin('最终版权归kk所有'),
//         // 该插件将为你生成一个 HTML5 文件， 其中包括使用 script 标签的 body 中的所有 webpack 包
//         new HtmlWebpackPlugin({
//             template: 'index.html'
//         })
//     ],
//     resolve: {
//         alias: {
//             'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
//         },
//         extensions: [".js", ".json", ".jsx", ".vue", ".css"]
//         // 使用的扩展名
//     },
//     devServer: {
//         contentBase: './dist',
//         compress: true,
//         port: 9000
//     }
// }