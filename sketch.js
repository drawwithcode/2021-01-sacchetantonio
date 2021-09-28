function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // put setup code here
  angleMode(DEGREES);
  background("#262624");
}

function draw() {
  // put drawing code here
  noStroke();
  //posizioneX
  let x = windowWidth / 2;
  //posizioneY
  let y = windowHeight - frameCount;
  //dimensione
  let r = 50 - frameCount / 15;
  //indiceColore
  let n = abs(cos(frameCount / ((50 * 15) / 90)));
  //variazioniColore
  let myColor1 = lerpColor(color("#262624"), color("#e6d500"), n);
  let myColor2 = lerpColor(color("#262624"), color("#e6332a"), n);
  let myColor3 = lerpColor(color("#262624"), color("#f39200"), n);
  let myColor4 = lerpColor(color("#262624"), color("#be1622"), n);

  //loop
  if (frameCount === 50 * 15) {
    //scale(1, 0.5, 1);
    //translate(0, -windowHeight / 5);

    frameCount = 0;
  }
  //tentacoloIniziale
  push();

  translate(50 * cos(frameCount), windowHeight / 7.5);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(-windowWidth / 16 + 50 * sin(frameCount), windowHeight / 10);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(-windowWidth / 8 + 50 * cos(frameCount), windowHeight / 50);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(-windowWidth / 6 + 50 * cos(frameCount), windowHeight / 10);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(-windowWidth / 4 + 50 * sin(frameCount), windowHeight / 6);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(-windowWidth / 2.5 + 50 * cos(frameCount), windowHeight / 3);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(windowWidth / 16 + 50 * sin(frameCount), windowHeight / 3);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(windowWidth / 8 + 50 * cos(frameCount), windowHeight / 10);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(windowWidth / 6 + 50 * sin(frameCount), windowHeight / 25);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(windowWidth / 4 + 50 * cos(frameCount), windowHeight / 10);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(windowWidth / 2.5 + 50 * cos(frameCount), windowHeight / 7);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(-windowWidth / 3 + 50 * sin(frameCount), windowHeight / 4);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(windowWidth / 3 + 50 * cos(frameCount), windowHeight / 3);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(windowWidth / 5 + 50 * sin(frameCount), windowHeight / 5);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(-windowWidth / 5 + 50 * sin(frameCount), windowHeight / 4);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(-windowWidth / 5 + 50 * sin(frameCount), windowHeight / 2);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(-windowWidth / 4 + 50 * sin(frameCount), windowHeight / 1.5);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(-windowWidth / 3 + 50 * cos(frameCount), windowHeight / 2);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(-windowWidth / 2.5 + 50 * sin(frameCount), windowHeight / 2.5);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(-windowWidth / 6 + 50 * sin(frameCount), windowHeight / 2);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(-windowWidth / 8 + 50 * cos(frameCount), windowHeight / 1.5);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(-windowWidth / 16 + 50 * cos(frameCount), windowHeight / 2);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(windowWidth / 16 + 50 * sin(frameCount), windowHeight / 2.5);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(windowWidth / 8 + 50 * sin(frameCount), windowHeight / 1.5);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(windowWidth / 6 + 50 * cos(frameCount), windowHeight / 2);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(windowWidth / 5 + 50 * sin(frameCount), windowHeight / 2.5);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(windowWidth / 4 + 50 * cos(frameCount), windowHeight / 1.5);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(windowWidth / 3 + 50 * cos(frameCount), windowHeight / 2);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();

  push();

  translate(windowWidth / 2.5 + 50 * sin(frameCount), windowHeight / 1.5);

  fill(myColor1);
  arc(x, y, r, r, frameCount, frameCount + 90, PIE);
  fill(myColor2);
  arc(x, y, r, r, frameCount + 90, frameCount + 180, PIE);
  fill(myColor3);
  arc(x, y, r, r, frameCount + 180, frameCount + 270, PIE);
  fill(myColor4);
  arc(x, y, r, r, frameCount + 270, frameCount + 360, PIE);

  pop();
}
