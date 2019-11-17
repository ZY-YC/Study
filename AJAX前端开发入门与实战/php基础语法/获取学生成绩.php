<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>学生成绩结果</title>
    <style>
        ul {
            list-style: none;
            color:red;
        }
        .title {
            font-size: 20px;
        }
    </style>
</head>
<body>
<?php
    $code = $_POST["code"];
    $date = array();
    $date["123"] = array("name"=>"zhangsan","Math"=>118,"english"=>120,"chinese"=>120);
    $result = $date[$code];
?>
<?php
    if (array_key_exists($code,$date)) {
?>
<div>
    <div class="title"><?php echo $result["name"]?>成绩如下</div>
    <ul>
        <li>语文：<?php echo $result["chinese"]?></li>
        <li>数学：<?php echo $result["Math"]?></li>
        <li>英语：<?php echo $result["english"]?></li>
    </ul>
</div>
<?php
}else{

?>
        <div>该学生考号不存在</div>
<?php }?>
</body>
</html>