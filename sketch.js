var piso,niño, bordeizq,bordeder,bordearr,bordeaba;
var pisoimagen,niñoimagen;
var edges;

function preload(){
  //loadImage de path (camino)
  pisoimagen=loadImage("path.png");
  //loadAnimation de boy (niño)
  niñoimagen=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
piso=createSprite(200,0);
 //agregar imagen de path
 piso.addImage("Piso", pisoimagen);

 //Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
piso.scale=1.2;


//crear sprite de boy (niño)
niño=createSprite(200,200,50,50);
//agregar animación para boy
niño.scale=0.08;
niño.addAnimation("Niño",niñoimagen);
// crear  left Boundary (límite izquierdo)
bordeizq=createSprite(0,0,50,800);
////establecer visibilidad como false (falso) para límite izquierdo
bordeizq.visible=false;
//crear right Boundary (límite derecho)
bordeder=createSprite(410,0,50,800);
//establecer visibilidad como false (falso) para límite izquierdo
bordeder.visible=false;
bordearr=createSprite(200,-10,400,20);
////establecer visibilidad como false (falso) para límite izquierdo
bordearr.visible=false;
//crear right Boundary (límite derecho)
bordeaba=createSprite(200,410,400,20);
//establecer visibilidad como false (falso) para límite izquierdo
bordeaba.visible=false;
}

function draw() {
  background(0);
  piso.velocityY = 4;
  if (piso.y>400) {
    piso.y=-200
    piso.velocityY=4
  }

  // boy moviéndose en el eje X con el mouse
niño.velocityY=4;
niño.x=mouseX;
  // colisión de boy con los límites derecho e izquierdo invisibles 
  niño.collide(bordeder);
  niño.collide(bordeizq);
  niño.collide(bordearr);
  niño.collide(bordeaba);
  //código para reiniciar el fondo
  
  
  drawSprites();
}
