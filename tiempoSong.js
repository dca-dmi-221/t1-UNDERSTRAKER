class tiempoSong{
    constructor(){
        this.posX = 0;
        this.posY = 594;
    }

    mostrar(){
        fill(211);
        noStroke();
        rect(this.posX,this.posY,1280,4);
    }
}