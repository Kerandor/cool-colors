p5.disableFriendlyErrors = true;
var t = 0;
let button1;
let button2;
let button3;
let canva;
let sh;
let fun;
let hs;
let v;
let be;

function randomFun(){
  sh = random(fun);
}

function funRandom(){
  hs = random(fun);
}

function ye(){
  v = random(0.01, 15);
  be = random(1,9);
}

function centerCanvas(){
  canva = createCanvas(displayWidth, displayHeight);
  x = (displayWidth - width) / 2;
  y = (displayHeight - height) / 2;
  canva.position = (x,y, 'relative');
  background(255);
}

function setup() {
  //noiseSeed(4);
  noLoop();
  pixelDensity();
  blendMode(REMOVE);
  centerCanvas();
  button1 = createButton("!vibe");
  button1.position(280, 735);
  button1.mousePressed(vibe);
  button2 = createButton("gn");
  button2.position(690, 735);
  button2.mousePressed(gn);
  button3 = createButton("pull rug");
  button3.position(480, 775);
  button3.mousePressed(rugged);
  fun = [cos, sin];
  randomFun();
  funRandom();
  ye();
  //let hs = randomFun();
  //let sh = randomFun();
}

function draw() {
  strokeWeight(0.31);
  //t += 0.0009;
  drawingContext.filter = "saturate(75) drop-shadow(8 6 4Q#0400)";
  drawingContext.setLineDash([1, 35, 11]);
  for (i = 14; i; i--) {
    beginShape();
    for (r = 0; r < 2 * TAU; r += 0.05)
      curveVertex(
        hs(r / (v*.05)) *
          (D =
            (noise(-sh(r + v), be  * 99, t) / be) *
            121 *
            (sh(r / v) * 12 * 1 +3)) +
          460,
        -hs(r ^ (be*.09)) * -D + 360
      );
    let arr = 355 * noise(t + 22);
    let g = 355 * noise(t + 34);
    let b = 255 * noise(t + 46);
    let z = 75 * noise(t + 420);
    fill(arr, g, b, z);
    t = t + 0.0009;
    endShape(CLOSE);
  }
}

function rugged() {
  noLoop();
  centerCanvas();
  randomFun();
  funRandom();
  ye();
  r = r + 1;
  }

function vibe() {
  loop();
}

function gn() {
  noLoop();
  ye();
}

function windowResized() {
  canva.position = (x,y);
  background(255);
}
