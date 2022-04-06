class tiempoSong{
    constructor(){
        this.posX = 0;
        this.posY = 594;
    }

    mostrar(){
        fill(211);
        noStroke();
        //no entiendo porque dice que no es una funcion
        rect(0,0,1280,180);
        //rect(this.posX,this.posY,1280,18);
    }
}