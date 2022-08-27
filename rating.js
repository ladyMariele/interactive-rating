
var selected;

var wasClick = false;

$(".number").click(function() {

  wasClick = true;

  selected = $(this).attr("ranking");

  $(".rating").text("You selected " + selected + " out of 5");

  console.log(this);

});

console.log(selected);


$(".submitButton").click(function() {

    if (!wasClick) {

    alert("Kindly choose a rating.");

  } else {

    $("#thanking").show();

    $("#rating").hide();
  }
});
