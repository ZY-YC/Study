// 编写交互效果代码
// 定义页面加载完后DOM操作的方法
window.onload = function() {
  //onload是一个dom范畴的事件，要想操作dom首先找到dom的元素节点
    var box = document.getElementById('container');
    //容器对象

    var imgs = box.getElementsByTagName('img');
    //获得图片NodeList对象集合

    //单张图片的宽度 offsetWidth是dom的样式操作
    var imgWidth = imgs[0].offsetWidth;

    //设置掩藏门体露出宽度
    var exposeWidth = 160;

    //设置容器总宽度
    var boxWidth = imgWidth + (imgs.length - 1) * exposeWidth;
    box.style.width = boxWidth + 'px';

    //设置每道门的初始位置
    function setIngsPos(){
     for (var i = 1,len = imgs.length; i< len ;i++) {

        imgs[i].style.left = imgWidth + exposeWidth *(i-1) + 'px';
    }
    }
    setIngsPos();
    //计算每道门打开时应移动的距离
    var translate = imgWidth - exposeWidth;

    //为每道门绑定事件
    for (var i = 0; i < imgs.length; i++) {
        //使用立即调用的函数表达式，未获得不同的i值
        //立即定义表达式的定义方法(function()i){})(i)
        (function(i){
            imgs[i].onmouseover = function(){
            //先将每每道门复位
            setIngsPos();

            //打开门
                for (var j = 1; j <= i ; j++) {
                    //left设置图片和容器的相对定位
                    //parseInt(imgs[j].style.left,10):自身当前left的值 parseInt将字符串转化为数值
                    imgs[j].style.left = parseInt(imgs[j].style.left,10)-translate+'px';
                }
            };
        })(i)
    }
};