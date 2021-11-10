class Log extends BaseClass {
    // Propriedades
    constructor (x,y,height,angle){ // recebe argumentos da função
        super(x,y,20,height,angle); // para transferir todas as propriedades da mãe para a filha! 
        this.image = loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body, angle)
        
    }
}