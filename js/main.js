
$(document).ready(function() {
    $("#addClick").click(function() {
    let newInt = $("#newInput").val();
    let $appends = `<li class='newList'><button class='remove'>X</button>  ${newInt} </li>`;
      $("#addHere").append($appends);
      $(".remove").click(function() {
        $(this).parent().remove();
      });
    });
  });
