<?php
if(!isset($_SESSION['cart'])){
    $_SESSION['cart']=array();
    $_SESSION['count']=0;


}




class Product {
  public $id;
  public $name;
  public $price;
  public $quantity;


  function __construct($id,$name,$price,$quantity) {
    $this->id = $id; 
    $this->name = $name;
    $this->price = $price;
    $this->quantity = $quantity;
  }
  
}



?>