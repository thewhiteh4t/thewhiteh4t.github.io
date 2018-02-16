$(document).ready(function(){ 
  $.get("ui.html", function(data) {
    $("#header").html(data);
  });
});