class volumen {
    constructor(){
        this.posX = 1243;
        this.posY = 662;
        this.rad = 40;

    }

    mostrar(){
        image(vol,0,0);
        fill(211)
        ellipse(this.posX,this.posY,20,20);
    }

    movimiento(){
        if(dist(mouseX,mouseY, this.posX,this.posY) < this.rad) {
                this.posX = mouseX;
                console.log(this.posX)
    } /*
        if(this.posX < 1097 || this.posX > 1293) {
            this.mousePressed == false;
    }*/
    }

}
