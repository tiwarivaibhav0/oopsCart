window.onload=showCart();
var products = [{"id":101,"name":"Basket Ball","image":"basketball.png","price":150},{"id":102,"name":"Football","image":"football.png","price":120},{"id":103,"name":"Soccer","image":"soccer.png","price":110},{"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},{"id":105,"name":"Tennis","image":"tennis.png","price":100}];


$(document).ready(function(){
    
    Show();

    $(document).on('click','.add-to-cart',function(e){
        e.preventDefault();
    
          var id=$(this).closest("div")[0].id;
          
          var name=$(this).closest("div").children().first().next().text();
          
          var price=$(this).closest("div").children().first().next().next().text();
          

          
          
          $.ajax({
              url: "cart.php",
              type:'POST',
              data: {id:id,name:name,price:price}, 
              success: function(result){
                  
                  $("#cart").html(result);
                  
  
                 
              },
              error: function (){},
          }); 
  
  
      });


      $(document).on('click','.delete',function(e){
        e.preventDefault();
        var del=$(this).closest("tr").children().first().text();


        $.ajax({
            url: "cart.php",
            type:'POST',
            data: {del:del}, 
            success: function(result){
                
                $("#cart").html(result);
                

               
            },
            error: function (){},
        }); 



    });
      


});



function Show(){
    let text='';
    for(let i=0;i<products.length;i++){
        text+="<div id='"+products[i].id+"' class='product'><img src='images/"+products[i].image+"'><h3 class='title'><a href='#'>"+products[i].name+"</a></h3> Price:<span> $"+products[i].price+".00</span><a class='add-to-cart' href='#' >Add To Cart</a></div>";

    }
    $("#products").html(text);
}


function showCart(){
    $.ajax({
        url: "cart.php",
        type:'POST',
        data: {namee:"name"}, 
        success: function(result){
           
            $("#cart").html(result);
        },
        error: function (){},
    });

}