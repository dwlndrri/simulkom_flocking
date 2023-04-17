const flock = []; //array yg akan diisikan banyak kendaraan
let alignSlider, cohesionSlider, separationSlider;
let population;
function setup() {
  createCanvas(400, 400);
  //createSlider(min, max, nilai_skrg, jarak antar nilai)
  alignSlider = createSlider(0,5,1,0.1);
  cohesionSlider = createSlider(0,5,1,0.1);
  separationSlider = createSlider(0,5,1,0.1);
  
  population = 200;
  for (let i=0; i<population;i++){
    flock.push(new Boid());
  }
}

function windowResized() { 
  resizeCanvas(windowWidth, windowHeight); 
} 


function draw() {
  background(20);

  text("AlignSlider", 45, 390)
  text("CohesionSlider", 160, 390)
  text("SeparationSlider", 290, 390)

  for (let boid of flock){
    boid.edges();
    boid.flock(flock)
    boid.update();
    boid.show();
  }
}