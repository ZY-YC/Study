//导入jquery包
import $ from 'jquery'

$(function() {
    $("li:odd").css('background-color','blue');

    $("li:even").css('background-color',function() {
        return '#' + 'D97634'
    });

});