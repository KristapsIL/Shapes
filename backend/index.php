<?php
header("Access-Control-Allow-Origin: *");
include "Rectangle.php";
include "Circle.php";
$Rectangle1 = new Rectangle("Red", 115,115);
$Rectangle1->{"area"} = $Rectangle1->calculateArea();
$Circle1 = new Circle("Green", 115);
$Circle1->{"area"} = $Circle1->calculateArea();
echo json_encode(array($Rectangle1,$Circle1));