class pagina1 {
    constructor(){

    }

mostrar(){
    image(fondo1,0,0);
    image(tommy,0,0);
    image(rect,0,0);
    image(repro,0,0);
    image(canc,0,-20)
    this.texto();
    
}

texto(){
    fill(255);
    textSize(60);
    textFont(RomanWood);
    text("CANCIONES",230,100);
}

reproducir(posX1,posY1,posX2,posY2,cancion){
    if(dist(posX1,posY1,posX2,posY2) < 10);
        if (cancion.isPlaying()) {
            cancion.stop();
        } else {
            cancion.play();
        }
}

}