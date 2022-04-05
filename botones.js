class botones {
    constructor(){
        this.posX1 = 773;
        this.posY1 = 660;
        this.posX2 = 869;
        this.posY2 = 659;
    }

    pause(){
        if(dist(mouseX, mouseY, this.posX2,this.posY2) < 40){
            if(canciones[inicio].isPlaying()) {
                canciones[inicio].pause();
            }
        } 
    }

    play(){
        if(dist(mouseX, mouseY, this.posX1,this.posY1) < 40){
            if(canciones[inicio].isPaused())
                canciones[inicio].play();
        }
    }

    next(){
        if(dist(mouseX, mouseY, 954, 660) < 30){
        canciones[inicio].stop();
        if (inicio < canciones.length -1 ) {
            inicio ++;  

        } else {
            inicio = 0;
            

        }
        canciones[inicio].play();
        //console.log(inicio);
        }
    }

    previous(){
        if(dist(mouseX, mouseY, 690, 660) < 30){
            canciones[inicio].stop();
            if (inicio > 0 ) {
                inicio --;  
            } else {
                inicio = 4;
            }
            canciones[inicio].play();
            console.log(inicio);
            }
    }
}