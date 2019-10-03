<?php
  header('Content-type' : 'application/json');
  $c = $_GET['a'];

  if($c !=""){
    $url = "http://en.wikipedia.org/w/api.php?action=query&prop=extracts&rvpop=content&rvsection=0&format=json&titles=".$c;
  }else {
    echo = "no data recieved";
  }
  $handle = fopen($url, "r");

  if($handle){
    while(!feof($handle)){
      $buffer = fgets($handle, 4096);
      echo $buffer;
    }
  }
  fclose($handle);
  ?>
