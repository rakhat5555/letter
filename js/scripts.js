$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person = $("input#name").val();
    $(".name").text(person);


    $("#letter").show();

    event.preventDefault();
  });
});
