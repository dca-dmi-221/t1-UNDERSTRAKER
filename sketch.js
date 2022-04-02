let pantalla;
let pag0;
let pag1;
let boton;
let fondo0;
let canciones = [];
let inicio = 0;

function setup() {
  createCanvas(1280, 720);
  pantalla = 1;
  pag0 = new pagina0();
  pag1 = new pagina1();
  boton = new botones();
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
  canc = loadImage('recursos/canciones.png')

  //Cargar fuentes
  RomanWood = loadFont('fuentes/Roman Wood Type JNL.ttf')

  //Cargar cancines
  canciones[0] = loadSound('canciones/Red Right Hand.mp3')
  canciones[1] = loadSound('canciones/Danny Boy.mp3')
  canciones[2] = loadSound('canciones/Broken Boy Soldier.mp3')
  canciones[3] = loadSound('canciones/Long Snake Moak.mp3')
  canciones[4] = loadSound('canciones/The Hardest Button to Button.mp3')
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
    if(inicio = 0) {
    pag1.reproducir(298,166, canciones[0]);
    } else if(inicio = 1) {
    pag1.reproducir(298,255, canciones[1]);
    } else if(inicio = 2) {
    pag1.reproducir(298,339, canciones[2]);
    } else if(inicio = 3) {
    pag1.reproducir(298,429, canciones[3]);
    } else if(inicio = 4) {
    pag1.reproducir(298,513, canciones[4]);
    }

    console.log(inicio);

    boton.pause();
    boton.play();
    }
}
