<?php

$user = "wasapon7763_db";
$pass = "wasapon";
try{
  $pdo = new PDO("mysql:host=mysql1.php.xdomain.ne.jp;dbname=wasapon7763_test;", $user, $pass,
                  array(PDO::ATTR_EMULATE_PREPARES => false));
} catch (PDOException $e){
  exit("Failed to connect Database".$e->getMessage());
}

$name = "yosuke";
$time = date("Y/m/d/H/i/s");

$sql = $pdo -> prepare("insert into texts(id, text, time) values(:name, :text, :time);");
$sql -> bindValue(":name", $name, PDO::PARAM_STR);
$sql -> bindValue(":text", $_POST["message"], PDO::PARAM_STR);
$sql -> bindValue(":time", $time, PDO::PARAM_STR);

$sql -> execute();

$url = $_SERVER['HTTP_REFERER'];
header("Location: ".$url);

?>
