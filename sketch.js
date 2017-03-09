function setup(){
    createCanvas(600,400);
    background(229, 177, 66);
}

function draw(){
    fill(244, 66, 164);
    ellipse(mouseX, mouseY, random(25), 40);
    noStroke();
}