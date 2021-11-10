class Box extends BaseClass{
    // Propriedades
    constructor (x,y,width,height){ // recebe argumentos da função
        super(x,y,width,height); // para transferir todas as propriedades da mãe para a filha! 
        this.image = loadImage("sprites/wood1.png");
        
    }
}