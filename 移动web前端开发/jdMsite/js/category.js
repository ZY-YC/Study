window.onload = function() {
//    左侧滑动
    leftSwipe();
    //右侧滑动
    rightSwipe();

};
var leftSwipe = function() {
    //上下滑动(touch事件)
    var parentBox = document.querySelector('.cate_left');
    var childBox = document.querySelector('ul');

    var startY = 0;
    var distanceY = 0;
    var isMove = false;

//程序核心点
    var currentY = 0;
    childBox.addEventListener('touchstart',function(e){
        startY = e.touches[0].clientY;
    });
    childBox.addEventListener('touchmove',function(e){
        var moveY = e.touches[0].clientY;
        distanceY = moveY - startY;
//将要去做定位的位置
        var translateY = currentY + distanceY;

        childBox.style.transform = 'translate('+translateY+'px)';
        childBox.style.webkitTransform = 'translate('+translateY+'px)';
        isMove = true;
    });
    childBox.addEventListener('touchend',function(e){
        currentY = currentY + distanceY;//滑动完后记录位置

    });


};
var rightSwipe = function() {

};