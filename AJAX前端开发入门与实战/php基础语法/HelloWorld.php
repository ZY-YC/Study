<?php
    //echo
    echo "<h1>Hello World php</h1>";
    //变量的声明和字符串拼接"."
    $str = "Hello";
    echo $str." "."php"."<br/>";
    $num1 = 100;
    $num2 = 200;
    $result = $num1 + $num2;
    echo $result;

    //php文件的执行原理
        /*
         * 浏览器并不能识别PHP
         * 使用PHP模块解析PHP语法
         */

    //数组的基本使用
    $arr = array();
    $arr["lisi"] = array("age"=>19,"sex"=>"man","height"=>198);
    $arr["wangwu"] = array("age"=>20,"sex"=>"women","height"=>168);
    var_dump($arr);
//    $arr[0] = 0;
//    $arr[1] = 1;
//    $arr[2] = 2;
//    $a = print_r("<br/>".$arr);
//    echo $a;
//    echo json_encode($arr);//将数组转化为json格式输出
//    for ($i = 0;$i < count($arr);$i++){
//        echo "<br/> ".$arr[$i];
//    }
//    //自定义数组索引
//    $arr1 = array("nam1" =>"张三","王五");
////    echo json_encode($arr1);
//    echo $arr1["name1"];