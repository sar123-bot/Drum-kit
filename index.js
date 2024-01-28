var numberOfbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var innerh = this.innerHTML;
    makesound(innerh);
    Animation(innerh);
  });
}

document.addEventListener("keydown", function (Event) {
  makesound(Event.key);
  Animation(Event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("./crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("./kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("./snare.mp3");
      snare.play();
      break;
    case "d":
      var tom_1 = new Audio("./tom-1.mp3");
      tom_1.play();
      break;
    case "j":
      var tom_2 = new Audio("./tom-2.mp3");
      tom_2.play();
      break;
    case "k":
      var tom_3 = new Audio("./tom-3.mp3");
      tom_3.play();
      break;
    case "l":
      var tom_4 = new Audio("./tom-4.mp3");
      tom_4.play();
      break;
    default:
      console.log("innerhtml");
      break;
  }
}

function Animation(pressedkey) {
  var activebutton = document.querySelector("." + pressedkey);
  activebutton.classList.add("pressed");
  setTimeout(function () {
    activebutton.classList.remove("pressed");
  }, 100);
}
 
