class pagina0 {
    constructor () {
        this.timer = 4;
    }
        


mostrar(){
    image(fondo0,0,0);
}

tiempo(){
    if (frameCount % 60 == 0 && this.timer > 0) {
        this.timer --;
    }

    if(this.timer == 0){
        pantalla = 1;
    }
}

}
