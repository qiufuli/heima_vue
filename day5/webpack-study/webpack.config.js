// 这个配置文件 就是一个js文件
// 通过node中的模块操作 向外部暴露一个配置对象

const path = require('path');
// 启用热更新的 第2步
const webpack = require('webpack');

// 导入在内存中生成html页面的插件
// 只要是插件 都一定要放到plugins 节点中去
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 在配置中需要手动 指定入口和出口
    // 入口，表示，要使用 webpack 打包哪个文件
    entry: path.join(__dirname, './src/main.js'),
    output: {
        // 指定 打包好的文件，输出到哪个目录中去
        path: path.join(__dirname, './dist'),
        // 这是指定 输出的文件的名称
        filename: 'bundle.js'
    },
    devServer: { // 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
        //  --open --port 3000 --contentBase src --hot
        open: true, // 自动打开浏览器
        port: 3000, // 设置启动时候的运行端口
        contentBase: 'src', // 指定托管的根目录
        hot: true // 启用热更新 的 第1步
    },
    plugins:[
         // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步
        new webpack.HotModuleReplacementPlugin(),
         // 创建一个 在内存中 生成 HTML  页面的插件
        new htmlWebpackPlugin({
            // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
            template:path.join(__dirname,'./src/index.html'),
            // 指定生成的页面的名称
            filename:'index.html'
        })
    ],
    // 这个节点 用于配置 所有第三方模块加载器
    module:{
        rules:[ // 所有第三方模块的匹配规则
            //  配置处理 .css 文件的第三方loader 规则
            {test:/\.css$/,use: ['style-loader', 'css-loader'] },
           //配置处理 .less 文件的第三方 loader 规则
           {test:/\.less$/,use: ['style-loader', 'css-loader','less-loader'] },
           //配置处理 .scss 文件的第三方 loader 规则
           {test:/\.scss$/,use: ['style-loader', 'css-loader','sass-loader'] }
        ]
    }
}



// 当我们在 控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
//  1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
//  2. webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
//  3. 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
//  4. 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；