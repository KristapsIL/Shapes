<?php
include_once "Shapes.php";
class Circle extends Shapes{
    public $radius;

    public function __construct($color, $radius){
        parent::__construct($color);
        $this->radius = $radius;
    }

    public function calculateArea(){
        return 3.14*pow($this->radius, 2);
    }
}