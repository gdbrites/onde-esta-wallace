$("#imageholder").on("mousemove", function(e){
    var ofst = ($(window).width() - 1024)/2;
    $("#glass").css({
      left :  Math.round(e.pageX - 60 - ofst) + "px",
      top : Math.round(e.pageY - 60 )  + "px"
    });
  });