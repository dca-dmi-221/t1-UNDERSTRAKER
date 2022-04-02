class pagina1 {
    constructor(){
        this.x = mouseX;
        this.y = mouseY;
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

reproducir(posX1,posY1,cancion){
    if(dist(mouseX, mouseY, posX1,posY1) < 40) {
        if (cancion.isPlaying()) {
            cancion.stop();
            cancion.play();
        } else {
            cancion.play();
        }

        return cancion;
    }  
}
    
botonesRep(posX1,posY1){

}

}