function myReady(fn){
    if(document.addEventListener){
        document.addEventListener("DOMContentLoaded",fn,false)
    }else{
        IEContentLoaded(fn);
    }
    //IE模拟DOMContentLoaded
    function IEContentLoaded(fn){
       var d = window.document;
        var done = false;
        //只执行一次用户的回调函数init();
        var init = function () {
            if(!done){
                done = true;
                fn();
            }
        };
        //立即调用
        (function() {
            d.documentElement.doScroll = function (left) {

            };
            try{
                //DOM树为创建完成之前调用doscroll会抛出错误
                d.documentElement.doScroll('left');
            }catch(e){
                setTimeout(arguments.callee,50);
                return;
            }
            init();
        })();
     //监听document的加载状态
        d.onreadystatechange = function() {
            //如果用户是在documentReady之后绑定的函数，就立即执行；
           if(d.readyState === 'complete'){
               d.onreadystatechange = null;
               init();
           }
        }
    }
}