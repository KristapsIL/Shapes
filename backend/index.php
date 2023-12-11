<?php
header("Access-Control-Allow-Origin: *");
include "Rectangle.php";
$Rectangle1 = new Rectangle("Red", 15,15);
echo json_encode($Rectangle1);