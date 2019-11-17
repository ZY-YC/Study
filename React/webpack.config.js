
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');//导入在内存中自动生成index页面的插件

//创建一个插件的实例
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,"/webpack-base/src/index.html"),//源文件
    filename:'index.html',//生成的内存中首页的名称
});

//向外暴露一个打包的配置对象;  因为webpack 是基于Node构建的，所以webpack支持所有Node API和语法
module.exports={
    mode:'development',//development production
    //在webpack 4.x 中，有一个很大的特性，就是约定大于配置 约定，默认打包入口路径是src -> index.js
    plugins: [
        htmlPlugin
    ],
    module:{
        //所有第三方模块的配置规则
        rules:[//第三方匹配规则
            {test: /\.js|jsx$/, use: 'babel-loader', exclude:/node_modules/},
             //千万别忘记添加exclude排除项
            //大家可以在css.loader之后 通过？追加参数
            //其中 有个固定的参数 叫做modules; 表示为普通的css样式表 启用模块化
            {test:/\.css$/,use:['style-loader','css-loader?modules'],},
            {test:/\.ttf|woff|woff2|eot|svg$/,use:'url-loader'},
            // {test:/\.scss$/,use:['style-loader','css-loader?modules','sass-loader']}
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','.json'],//表示这几个文件的后缀名，可省略不写
        alias: {
            // '@': path.join(__dirname,'./src'),//这样 @ 符号就表示项目根目录中src这一层目录
        }
    }
};

//行不行？ 目前不行 //这是ES6中，向外导出模块的API 与之对应的是import ** from '标识符'
//export default{}


//那些特性 Node支持？ 如果Chrome 支持 Node就支持

