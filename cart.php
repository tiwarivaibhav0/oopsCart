<?php
include 'config.php';
session_start();

if(isset($_POST['id'])){


    $id=$_POST['id'];
    $name=$_POST['name'];
    $price=$_POST['price'];
    $quantity=1; 

    $obj = new Product($id,$name,$price,$quantity);
     $flag=1;
     if(isset($_SESSION['cart']))
     foreach($_SESSION['cart'] as $val){
         if($id==$val->id){
             $val->quantity+=1;
             $flag=0;
         }
         
        

     }
     if($flag==1){
        
        $_SESSION['cart'][$id]=$obj;

     }


    show();


}
if(isset($_POST['del'])){
    $del=$_POST['del'];
    unset($_SESSION['cart'][$del]);
    show();




}
if(isset($_POST['namee'])){
    $namee=$_POST['namee'];
   
    show();




}

function show(){
    if(count($_SESSION['cart'])>0){
        $text="<tr><th>ID</th><th>Product Name</th><th>Price</th><th>Quantity</th><th>Action</th></tr>";
        foreach($_SESSION['cart'] as $val){ 
          
         $text.="<tr><td>".$val->id."</td><td>".$val->name."</td><td>".$val->price."</td><td>".$val->quantity."</td><td><a href='#' class='delete'>Delete</a></td></tr>";
  
      }
      echo $text;






}
}





?>