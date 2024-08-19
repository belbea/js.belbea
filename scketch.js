function setup() {
    createCanvas(400, 400);
     background("pink");
  }
  
    function draw() {
  
    stroke("brown");
    fill("purple");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }