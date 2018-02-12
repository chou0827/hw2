background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(255, 255, random(160));
  beginShape(TRIANGLES);
vertex(random(width), random(height), random(20, 40));
vertex(random(width), random(height), random(20, 40));
vertex(random(width), random(height), random(20, 40));
vertex(random(width), random(height), random(20, 40));
vertex(random(width), random(height), random(20, 40));
vertex(random(width), random(height), random(20, 40));
vertex(random(width), random(height), random(20, 40));
endShape();
}
