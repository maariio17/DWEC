var bolas;
var svg = document.getElementById("svg");

class bola{
    constructor (radio, color, x, y, velX, velY){
        this.r = radio;
        this.color = color;
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;

        //Crear su representacion en pantalla
        this.circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circ.setAttributeNS(null, "cx", this.x);
        this.circ.setAttributeNS(null, "cy", this.y);
        this.circ.setAttributeNS(null, "r", this.r);
        this.circ.setAttributeNS(null, "fill", this.color);
        document.getElementsByTagName("svg")[0].appendChild(this.circ);
    }

    dibuja(bola){
        let posXact = parseInt(this.circ.getAttribute("cx"))+this.velX;
        this.circ.setAttribute("cx", posXact);
    
        let posYact = parseInt(this.circ.getAttribute("cy"))+this.velY;
        this.circ.setAttribute("cy", posYact);
    
        //Detectar Colisiones
        let tamanoSVG = document.getElementsByTagName("svg")[0].getBoundingClientRect();
        if ((posXact-this.r) <=0 || (posXact+this.r) >= tamanoSVG.width){
            this.velX*= -1;
        }
    
        if ((posYact - this.r) <=0 || (posYact + this.r) >= tamanoSVG.height){
            this.velY*= -1;
        }

    }
}

window.onload = function(){
    //Crear Bolas
    bolas = [];
    //for (i=1; i<15; i++){
        bolas.push(new bola(5, "blue", 10, 10, 5, 6));
        bolas.push(new bola(10, "red", 10, 5, 10, 6));
    //}
    setInterval(animaTodasBolas, 30);
    
}

function animaTodasBolas(){
    for (i=0; i<bolas.length; i++){
        bolas[i].dibuja();
    }
}

