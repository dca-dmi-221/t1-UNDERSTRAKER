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
}