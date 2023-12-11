<?php
abstract class Shapes{
    public $color;

    public function __construct($color){
        $this->color = $color;
    }

    abstract public function calculateArea();
}