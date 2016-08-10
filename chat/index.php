<?php
$user = "wasapon7763_db";
$pass = "wasapon";
try{
  $pdo = new PDO("mysql:host=mysql1.php.xdomain.ne.jp;dbname=wasapon7763_test;", $user, $pass,
                  array(PDO::ATTR_EMULATE_PREPARES => false));
} catch (PDOException $e){
  exit("Failed to connect Database".$e->getMessage());
}

$stmt = $pdo -> query("select * from texts order by time desc;");

$ttime = [];

$i = 0;
while ($row = $stmt -> fetch(PDO::FETCH_ASSOC)){
  $tid = $row["id"];
  $ttext[$i] = $row["text"];
  $ttime = $row["time"];

  $i++;
}
?>

<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

  <link rel="stylesheet" type="text/css" href="css/style.css" media=all>
  <link rel="stylesheet" type="text/css" href="css/message.css" media=all>

  <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.1.min.js"></script>

  <script>
  var height = 0;
  function strWidth(str, num){
    if (height > 500) return;
    var e = $("#hoge");
	  var width = e.text(str).get(0).offsetWidth;

    var triangleClass = document.getElementsByClassName("triangle");
    var bubbleClass = document.getElementsByClassName("bubble");

    var h = 0;
    for (var i = 0; i < 10; i++){
      if (width > 183 * i) h += 30;
    }

    bubbleClass[num].style.height = h + "px";
    triangleClass[num].style.bottom = (-20 + height) + "px";
    bubbleClass[num].style.bottom = (height + 20) + "px";

    triangleClass[num].style.visibility = "";
    bubbleClass[num].style.visibility = "";

    height += (30 + h); //number: space between messages

    if (height > 500){
      triangleClass[num].style.visibility = "hidden";
      bubbleClass[num].style.visibility = "hidden";
    }
	}
	</script>

  <title>Simple Chat</title>

</head>
<body>
  <div id="wrapper">
    <div id="maindisplay">
      <div id="textboard">
        <div class="text"></div>
        <div class="text"></div>
        <div class="text"></div>
        <div class="text">
          <?php
          for ($i = 0; $i < count($ttext); $i++){
            echo "<div class='triangle' style='visibility: hidden;'></div>"; //hidden: avoid displaying instantly
            echo "<div class='bubble' style='visibility: hidden;'>$ttext[$i]</div>";

            echo "<span id='hoge' style='visibility: hidden; position: absolute; white-space: nowrap;'></span>";
            echo "<script type='text/javascript'>var str = '" . $ttext[$i] . "'; strWidth(str, $i);</script>";
          }
          ?>
        </div>
      </div>
      <div id="userboard">
        <div class="user"></div>
        <div class="user"></div>
        <div class="user"></div>
        <div class="user"></div>
      </div>
    </div>
    <div id="textbox">
      <form action="send.php" method="post">
        Textbox<br>
        <textarea type="text" name="message" cols="29" rows="3" style="resize: none;"></textarea>
        <input type="submit" value="send" style="width: 80px; font-size: 30px;">
      </form>
    </div>
  </div>
</body>
</html>
