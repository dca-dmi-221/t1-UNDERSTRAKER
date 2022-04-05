let pantalla;
let pag0;
let pag1;
let boton;
let fondo0;
let canciones = [];
let portada = [];
let inicio;

function setup() {
  createCanvas(1280, 720);
  pantalla = 1;
  inicio = 0;
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

  //portadas
  portada[0] = loadImage('recursos/rrh.png')
  portada[1] = loadImage('recursos/dhbb.png')
  portada[2] = loadImage('recursos/bbs.png')
  portada[3] = loadImage('recursos/db.png')
  portada[4] = loadImage('recursos/lsm.png')

  //Cargar fuentes
  RomanWood = loadFont('fuentes/Roman Wood Type JNL.ttf')
  Roboto = loadFont('fuentes/Roboto Regular.ttf')

  //Cargar cancines
  canciones[0] = loadSound('canciones/Red Right Hand.mp3')
  canciones[3] = loadSound('canciones/Danny Boy.mp3')
  canciones[2] = loadSound('canciones/Broken Boy Soldier.mp3')
  canciones[4] = loadSound('canciones/Long Snake Moak.mp3')
  canciones[1] = loadSound('canciones/The Hardest Button to Button.mp3')

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

    pag1.reproducir(262,128,385,70, canciones[0], 0, 1);
    pag1.reproducir(262,215,476,70, canciones[1], 1, 2);
    pag1.reproducir(262,300,338,70, canciones[2], 2, 3);
    pag1.reproducir(262,387,216,70, canciones[3], 3, 4);
    pag1.reproducir(262,479,299,70, canciones[4], 4, 5);
    

    //console.log(inicio);

    boton.pause();
    boton.play();
    boton.next();
    boton.previous();
    }

}
