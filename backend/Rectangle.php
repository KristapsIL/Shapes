<?php
include_once "Shapes.php";
class Rectangle extends Shapes{
    public $width;
    public $height;

    public function __construct($color, $width, $height){
        parent::__construct($color);
        $this->width = $width;
        $this->height = $height;
    }

    public function calculateArea(){
        return $this->width*$this->height;
    }
}