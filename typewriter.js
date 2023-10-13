 var name = "Windel Tortuga Navales";
var typewriterElement = document.getElementById("typewriter");

function typewriter() {
  var index = 0; 
  typewriterElement.innerHTML = ""; 
  function type() {
    if (index < name.length) {
      typewriterElement.innerHTML += name.charAt(index);
      index++;
      setTimeout(type, 90);
    } else {
      setTimeout(typewriter, 2000);
    }
  }
  type();
}

typewriter();

function changeColor() {
  document.getElementById("changeBG").style.color = "#000";
}
