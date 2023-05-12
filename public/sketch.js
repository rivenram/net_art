//https://rivenram-deno-blog.deno.dev

// arrays for the star trails
let particles = [];

// variables
// amount of star trails
const num = 200;


// noise generates a semi-random sequence  that are more naturally ordered and structured, compared to the standard and fully random function
// so the star trails move in a circular direction
const noiseScale = 0.001 / 2;

function setup() {
  // so the canvas follows the screen size
  createCanvas(innerWidth, innerHeight);

  // iteration
  for (let i = 0; i < num; i++) {
    // so the star trails appeared in random location every time
    particles.push(createVector(random(width), random(height)));
  }
}

function draw() {
  background(0, 5); //black background colour, the 10 is for a more "faded" background so the trails are more visible

  // iteration
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise( 
      p.x * noiseScale,
      p.y * noiseScale,
      frameCount * noiseScale * noiseScale
    );
    // to make the star trails movement less random and more coherent
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);

    //custom function
    // adding interaction by changing the direction of the trails by clicking on it
    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }

    // conditional logic
    // changing the star trails colour on mouse hold
    if (mouseIsPressed) {
      stroke("gold");
    } else {
      stroke("white");
    }
  }
}

// to change the star trails direction on mouse click
function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

// references & inspirations:
// https://p5js.org/reference/#/p5/noise
// https://youtu.be/_aBD7zjS9sc
// https://youtu.be/17WoOqgXsRM
// https://youtu.be/62SbexSgQIw
// https://youtu.be/sZBfLgfsvSk
