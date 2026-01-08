let gameState = "splash";

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  if (gameState === "splash") {
    splashScreen();
  } else if (gameState === "play") {
    playScreen();
  }
}

function splashScreen() {
  background(30);
  fill(255);
  textSize(32);
  text("Is This Seat Taken?", width / 2, height / 2 - 30);

  textSize(16);
  text("Click to Start", width / 2, height / 2 + 20);
}

function playScreen() {
  background(220);

  // Seat
  let seatX = width / 2 - 50;
  let seatY = height / 2 - 25;
  let seatW = 100;
  let seatH = 50;

  if (
    mouseX > seatX &&
    mouseX < seatX + seatW &&
    mouseY > seatY &&
    mouseY < seatY + seatH
  ) {
    fill(100, 200, 150);
  } else {
    fill(180);
  }

  rect(seatX, seatY, seatW, seatH, 8);

  fill(0);
  textSize(14);
  text("Hover the seat", width / 2, height - 30);
}

function mousePressed() {
  if (gameState === "splash") {
    gameState = "play";
  }
}
