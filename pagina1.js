 class pagina1 {
    constructor(){
        this.x = mouseX;
        this.y = mouseY;
        //this.imagenes = 0;
        
    }


mostrar(){
    image(fondo1,0,0);
    image(tommy,0,0);
    image(rectangle,0,0);
    image(repro,0,0);
    image(canc,0,-20);
    
    this.texto(RomanWood,"CANCIONES",230,100,60);
    this.texto(RomanWood,"RED RIGHT HAND",350,160,40);
    this.texto(RomanWood,"THE HARDEST BUTTON TO BUTTON",350,245,40);
    this.texto(RomanWood,"BROKEN BOY SOLDIER",350,335,40);
    this.texto(RomanWood,"DANNY BOY",350, 420,40);
    this.texto(RomanWood,"LONG SNAKE MOAK",350,510,40);
    this.texto(Roboto,"Nick Cave & The Bad Seeds", 350,185,18);
    this.texto(Roboto,"The White Stripes", 350,270,18);
    this.texto(Roboto,"The Rancoteurs", 350,360,18);
    this.texto(Roboto,"Johnny Cash", 350,445,18);
    this.texto(Roboto,"PJ Harvey", 350,535,18);

    switch (imagenes) {
        case 1:
            image(portada[0],0,0);
            this.texto(Roboto,"Red Right Hand",170,650,30);
            this.texto(Roboto,"Nick Cave & The Bad Seeds", 170,680,20);
            break;
        case 2:
            image(portada[1],0,0);
            this.texto(Roboto,"The Hardest Button to Button",170,650,30);
            this.texto(Roboto,"The White Stripes", 170,680,20);
            break;
        case 3:
            image(portada[2],0,0);
            this.texto(Roboto,"Broken Boy Soldier",170,650,30);
            this.texto(Roboto,"The Rancoteurs", 170,680,20);
            break;
        case 4:
            image(portada[3],0,0);
            this.texto(Roboto,"Danny Boy",170,650,30);
            this.texto(Roboto,"Johnny Cash", 170,680,20);
            break;
        case 5:
            image(portada[4],0,0);
            this.texto(Roboto,"Long Snake Moak",170,650,30);
            this.texto(Roboto,"PJ Harvey", 170,680,20);
            break;
    }

}

texto(fuente,texto,x,y,tamano){
    fill(255);
    textSize(tamano);
    textFont(fuente);
    text(texto,x,y);

}
 

reproducir(posX1,posY1,w,h,cancion, noInicio, imagen){
    if((mouseX > posX1) && (mouseX < posX1 + w) && 
    (mouseY > posY1) && (mouseY < posY1 + h)) {
        inicio = noInicio;
        
        if (cancion.isPlaying()) {
            cancion.stop();
            
            
        } else {  
            noInicio
            cancion.play();
            imagenes = imagen;
            //console.log(this.imagenes)
            
            
            
        }
    }  
}

setImagen(img){
    this.imagenes = img;
}

    
}

