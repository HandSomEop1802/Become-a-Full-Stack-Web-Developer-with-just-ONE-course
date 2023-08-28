
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];


var userClickedPattern = [];


$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
});
function playSound(name){
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

}

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

 playSound(randomChosenColour);
}
function animatePress(currentColour){
  $("#"+ currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
 }




