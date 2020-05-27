const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    //（入口） 
    entry: path.resolve(__dirname, 'src/index.js'), //当前文件所在目录位置
    //（出口）
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    //(配置loader) 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,//图片超过8k转base64图
                            name: '[hash:8].[ext]'  //图片名字取8位哈希值
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    //配置插件
    plugins: [
        new HtmlWebpackPlugin({                     //第二步
            template: './src/public/index.html'  //设置html地址
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new CopyPlugin([
            {
                from:path.resolve(__dirname,"src/public"),
                to:path.resolve(__dirname,'dist'),
                ignore:['index.html']
            }
        ])
    ],
    devServer: {
        port: 8000, //服务启动的端口
        open: true, //自动打开浏览器
        quiet: true //输入少量的提升信息
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: [".js", ".json", ".vue"]
    }
}