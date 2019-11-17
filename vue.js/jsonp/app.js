// 引入 HTTP 模块
const http = require("http");
//这个核心模块 能够帮我们解析 URL地址 从而拿到 pathname query
const  urlModule = require('url');

// 可以使用 HTTPS 模块
// const https = require("https");

//创建一个http服务器
const server = http.createServer();

//监听http服务器的request请求
server.on('request',function(req,res) {

    // const url = req.url;
    const { pathname:url, query } = urlModule.parse(req.url,true);
    if(url!=='/getscript') {
        //拼接一个合法的js脚本，这里拼接的是一个方法的调用
        // var scriptStr = 'show()';
        var data = {
            name:'ZY',
            age:18,
            sex:"nv"
        };
        var scriptStr = '${query.callback}(${JSON.stringify(data)})';
        //res.end 发送给客户端，客户端去把这个字符串，当作JS代码去解析执行
        res.end(scriptStr);
    } else {
        res.end('404');
    }
});

//指定端口号并启动服务器监听
server.listen(3000,function() {
    console.log('server listen at http://127.0.0.1:3000');
});