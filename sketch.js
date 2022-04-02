let pantalla;
let pag0;
let pag1;
let fondo0;

function setup() {
  createCanvas(1280, 720);
  pantalla = 1;
  pag0 = new pagina0();
  pag1 = new pagina1();
}

function draw() {
  background(220);
  pantallas();
  //console.log(mouseX, ',',mouseY);
}

function preload(){
  //Cargar imagenes
  fondo0 = loadImage('recursos/Pantalla0.png')
  fondo1 = loadImage('recursos/pantalla1.png')
  tommy = loadImage('recursos/tommy.png')
  rect = loadImage('recursos/rect.png')
  repro = loadImage('recursos/reproduciendo.png')
  pause = loadImage('recursos/pausa.png')
  canc = loadImage('recursos/canciones.png')

  //Cargar fuentes
  RomanWood = loadFont('fuentes/Roman Wood Type JNL.ttf')

  //Cargar cancines
  RRH = loadSound('canciones/Red Right Hand.mp3')
  DB = loadSound('canciones/Danny Boy.mp3')
  BBS = loadSound('canciones/Broken Boy Soldier.mp3')
  LSM = loadSound('canciones/Long Snake Moak.mp3')
  HBB = loadSound('canciones/The Hardest Button to Button.mp3')
}

function pantallas() {
    switch (pantalla) {
      case 0:
        pag0.mostrar();
        pag0.tiempo();
        break;
      case 1:
        pag1.mostrar();
        break;
    }
}

function mouseClicked() {
  if(pantalla == 1) {
    pag1.reproducir(298,166,RRH);
    pag1.reproducir(298,255,HBB);
    pag1.reproducir(298,339,BBS);
    pag1.reproducir(298,429,DB);
    pag1.reproducir(298,513,LSM);
    }
}
