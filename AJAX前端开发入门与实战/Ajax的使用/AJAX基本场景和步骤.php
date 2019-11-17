<?php
   /*
    * 熟悉场景：
    *    评论加载效果
    *    用户名验证
    *
    *
    * 步骤：
    *    1.创建XMLHttpRequest对象
    *        var xhr = new XMLHttpRequest()
    *        //兼容处理（主要处理IE6）
    *        var xhr = null;
    *        if(window.XMLHttpRequest) {
    *            xhr = new XMLHttpRequest();
    *       } else {
    *               //IE6浏览器
    *           xhr = new ActiveXObject("Microsoft.XMLHTTP");
    *       }
    *    2.准备发送网络请求
    *        xhr.open("get","文件名.php ?参数(如id=) = " + 参数)；
    *        xhr.open("post","文件名.php",true)；
    *    3.开始发送网络请求
    *        xhr.send(null);GET
    *        var param = "username=" + username;
    *        这个步骤只有POST请求才有，设置请求头
    *        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    *        xhr.send(param);POST
    *    4.指定回调函数
    *     xhr.onreadystatechange = function(){
    *        if(xhr.readyState == 4){
    *            if(xhr.status == 200){
    *                //得到数据
    *                /xhr.responseXML
    *                var result = xhr.responseText;
    *                document.getElementById("result").innerText = result;
    *            }
    *
    *        }
    *
    *     }
    *      xhr.readyState = 0 表示xhr对象创建完毕
    *      xhr.readyState = 1 表示已经发送请求
    *      xhr.readyState = 2 表示浏览器已经收到了服务器响应的数据
    *      xhr.readyState = 3 表示正在解析数据
    *      xhr.readyState = 4 表示数据易经解析完成，可以使用
    *      xhr.status = 200 表述响应成功
    *      xhr.status = 404 没有找到请求的资源
    *      xhr.status = 500 服务器端错误
    * 局部刷新 异步加载
    *
    *
    *
    *
    *
    */