import java.io.File;
String [] imageFileNames;
ArrayList images;

PGraphics pg;

final String sketchName = getClass().getName();

void setup() {

  size(800, 500 );
  java.io.File folder = new java.io.File(dataPath("../../img"));
  imageFileNames = folder.list();

  println("loading...");
  // Load the image-files and push thems to imagess-arrayList



  println(imageFileNames.length + " images");
  pg = createGraphics(width, height);
  background(#f1f1f1);
  fill(#2000a1);
  noStroke();
  for (int i = 0; i < imageFileNames.length; i++) {
  }
}

void draw() {
  background(#f1f1f1);
noStroke();
fill(#2000a1);
  if (frameCount < imageFileNames.length) {
    PImage img = loadImage(imageFileNames[frameCount-1]);
    img.resize(width, height);
    float tilesX = 200; 
    float tilesY = int(tilesX/4*3);

    float tileW = width/ tilesX;
    float tileH = height/ tilesY;



    for (int x = 0; x < tilesX; x++) {
      for (int y = 0; y < tilesY; y++) {
        int px = int(x*tileW);
        int py = int(y*tileH);
        color c = img.get(px, py);
        float b = brightness(c);
        float s = map(b, 0, 255, 1, 0);
        push();
        translate(x*tileW, y*tileH);
        rect(0, 0, s*tileW + 1, s*tileH + 1);

        pop();
      }
    }
    saveFrame("../imgProcessed/" + imageFileNames[frameCount-1]);
  } else {
    exit();
  }
}
