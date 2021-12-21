function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  
   let t = (frameCount-20)/1000;
	clear();
  background(0);
    for (let c=0; c<9; c++){
      fill((40*c)%360,100,300)
      noStroke();
      beginShape();
      for (let i=0; i<=1; i+=1/1000){
        yv = height/2*(1-.65*sin(TAU*(i-(c+1)*t))*sq(sin(PI*i*5)));
        curveVertex(width*i,yv)
      }
      endShape();
    }
      
}