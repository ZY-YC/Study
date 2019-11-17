window.onload = function() {
//    初始化页面功能
    //1.搜索
    search();
    //2.轮播图
    banner();
    //3.倒计时
    downTime();
};
var search = function() {
    //1.页面初始化的时候  距离顶部是0的距离的时候 透明度是0；
    //2.当页面滚动的时候 随着页面距离顶部的距离变大 透明度变大
    //3.当滚动的距离超过了轮播图的距离的时候 保持不变

    //获取DOM元素
    var search = document.querySelector('.jd_search_box');
    var banner = document.querySelector('.jd_banner');
    //距离范围
    var height = banner.offsetHeight;
    //监听滚动事件
    window.onscroll = function() {
        //当前页面滚动的距离
        var top = document.documentElement.scrollTop;//谷歌
        // var top = document.documentElement.scrollTop;//IE
        // console.log(height);
        var opacity = 0;
        if(top <= height) {
            opacity=0.85;
        } else {
            opacity = 0.85*(height/top);
        }
        //设置颜色给搜索盒子
        search.style.background = 'rgba(216,80,92,'+opacity+')'
    }


};
var banner = function() {
        /*
        *1.无缝滚动和无缝滑动：
        *   实现：让他自动滚起来---定时器、过渡、位移
        *2.点盒子对应改变 --- 改变当前样式
        *3.可以滑动 ---借助touch事件  监听触摸点坐标改变距离/位移
        *4.当滑动距离不够时，吸附回原来的位置---过渡加位移   超过1/3是，做跳转操作 跳转上一张 or 下一张
        */

        //获取需要操作的元素
    //大容器
    var banner = document.querySelector('.jd_banner');
    var width = banner.offsetWidth;
    //轮播容器-----图片容器
    var imageBox = banner.querySelector('ul:first-child');
    //点容器
    var pointBox = banner.querySelector('ul:last-child');
    var points = pointBox.querySelectorAll('li');


    //提几个公用的方法
    var addTransition = function() {
        //过渡
        imageBox.style.transition = 'all 0.2s';
        imageBox.style.webkitTransition = 'all 0.2s';//兼容
    };
    var removeTransition = function() {
        //清除过渡
        imageBox.style.transition = 'none';
        imageBox.style.webkitTransition = 'none';//兼容
    };
    var setTranslateX = function(translateX) {
        //定位
        imageBox.style.transform = 'translateX('+translateX+'px)';
        imageBox.style.wetkittransform = 'translateX('+translateX+'px)';
    };


         // 1.无缝滚动和无缝滑动：
        var index = 1;//默认索引
        var timer = setInterval(function() {
            index++;
            //过渡
            addTransition();
            //位移
            setTranslateX(-index*width);
        },1000);
        //监听过渡结束事件
        imageBox.addEventListener('transitionend',function() {
           //无缝滚动
            if(index >= 9) {
                //瞬间定位到第一张
                index = 1;
                removeTransition();
                //定位
                setTranslateX(-index*width);


            } //无缝滑动
            else if(index <= 0) {
                    //瞬间定位到第八张
                    index = 8;
                    //清除过渡
                    removeTransition();
                    //定位
                    setTranslateX(-index*width);
                }
            //其 他情况下正常
            //index 取值范围 1-8 对应点的 0-7
            setPoint();
        });
        //2.点盒子对应改变（改变当前样式）
        var setPoint = function() {
            //index : 1-8
            //去除所有的now样式
            for(var i = 0; i < points.length; i++) {
                points[i].classList.remove('now') ;
            }
            //给对应的加上
            points[index-1].classList.add('now');
        };

        var startX = 0;//记录开始的X坐标
        var distanceX   = 0; //记录坐标坐标轴的改变
        //严谨判断
        var isMove = false;
        //3.可以滑动 ---借助touch事件  监听触摸点坐标改变距离/位移
        imageBox.addEventListener('touchstart',function(e) {
            //清除定时器
            clearInterval(timer);
            //  记录开始的位置
            startX = e.touches[0].clientX;
         });
        imageBox.addEventListener('touchmove',function(e) {
            var moveX = e.touches[0].clientX;
            distanceX = moveX - startX;
            //distance大于0的时候 他应该是向右滑动
            //distance小于0的时候 他应该是向左滑动


            //滑动
            //基于当前的位置去移动
            //计算将要去做的定位
            var translateX = -index*width + distanceX;
            //清除过渡
            removeTransition();
            setTranslateX(translateX);
            isMove = true;
        });
        imageBox.addEventListener('touchend',function(e) {
            //滑动事件结束后来判断当前滑动的距离
            //有一个范围 如果大于三分之一切换图片 反之吸附回去定位回去
           if(isMove) {
                if(Math.abs(distanceX) < width/3) {
                    //过渡
                    addTransition();
                    //位移
                    setTranslateX(-index*width);
                }
           } else {
                    if(distanceX > 0) {
                        //向右划 上一张
                        index-- ;
                        //过渡 再 定位
                        addTransition();
                        setTranslateX(-index*width);
                    } else {
                        //向左划 下一张
                        index++;
                        addTransition();
                        setTranslateX(-index*width);
                }
           }
           //加上定时器
            clearInterval(timer);
            timer = setInterval(function() {
                index++;
                //过渡
                addTransition();
                //位移
                setTranslateX(-index*width);
            },1000);

            //重置参数
            startX = 0;
            distanceX = 0;
            isMove = 0;
        })
};
var downTime = function() {
//1.模拟倒计时的时间
    //2.利用定时器 1秒一次 重新展示 渲染时间

    var time = 60*60*11;

    var skTime = document.querySelector('.sk_time');
    var spans = skTime.querySelectorAll('span');
    var timer = setInterval(function() {
        time--;
        var h = Math.floor(time/3600);
        var m = Math.floor(time%3600/60);
        var s = Math.floor(time%60);
        //设置时间
        spans[0].innerHTML = Math.floor(h/10) ;
        spans[1].innerHTML = h%10;
        spans[3].innerHTML = Math.floor(m/10);
        spans[4].innerHTML = m%10;
        spans[6].innerHTML = Math.floor(s/10);
        spans[7].innerHTML = s%10 ;
    },1000);
    if(time <= 0) {
        clearInterval(timer);
    }

};