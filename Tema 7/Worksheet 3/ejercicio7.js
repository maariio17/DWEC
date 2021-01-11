$( "#right" ).click(function() {
    $( "#pelota" ).animate({ "left": "+=50px" }, "slow" );
  });
   
  $( "#left" ).click(function(){
    $( "#pelota" ).animate({ "left": "-=50px" }, "slow" );
  });

  $( "#click" ).click(function() {
    $( "#block" ).animate({
      width: "70%",
      opacity: 0.4,
      marginLeft: "0.6in",
      fontSize: "3em",
      borderWidth: "10px"
    }, 1500 );
  });