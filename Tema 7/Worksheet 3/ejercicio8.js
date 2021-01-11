$( "#click" ).click(function() {
    $( "#one:hidden" ).fadeIn( "slow" );
  });

  $( "#click2" ).click(function() {
    $( "#two:hidden" ).fadeIn( "fast" );
  });

  $( "#click3" ).click(function() {
    $( "#three:hidden" ).fadeIn( "800ms" );
  });

  $( "#click4" ).click(function() {
    $( "#four:hidden" ).fadeIn( "2000ms" );
  });

  $( "#click5" ).click(function() {
    $( "#five:hidden" ).fadeIn( "4000ms" );
  });