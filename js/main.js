
$(document).ready(function() {
    $("#addClick").click(function() {
    let newInt = $("#newInput").val();
      $("#addHere").append("<li class='newList'><button class='remove'>X</button> " +newInt+'</li>');
      $(".remove").click(function() {
        $(".newList").fadeOut(2000);
      });
    });
  });
