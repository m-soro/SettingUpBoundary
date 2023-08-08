// This are coming from the css file
let currentX = 100;
let currentY = 100;

//  this function will do the animation
function animate() {
  // first thing it does is place the ball in the screen set it to the current x coordinate
  document.querySelector("#ball").style.left = currentX + "px";
  document.querySelector("#ball").style.top = currentY + "px";
  // For linear movement use simple addition
  // Basically setting the animation for the next frame
  currentX += 5;
  currentY += 5;

  //condition for the animation
  if (currentX > 800 || currentY > 600) {
    // if above is true, end the animation
    return;
  }
  // call function every 10 ms
  setTimeout("animate()", 10);
}

window.addEventListener("load", animate);
