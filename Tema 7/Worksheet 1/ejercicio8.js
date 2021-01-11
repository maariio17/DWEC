$( "div > h3" )
  .hover(function() {
    $( this ).css( "visibility", "hidden" );
  }, function() {
    $( this ).css( "visibility", "visible");
  });

  $( "div > p" )
  .hover(function() {
    $( this ).css( "backgroundColor", "grey" );
  }, function() {
    $( this ).css( "backgroundColor", "white");
  });

