class Pig extends BaseClass {
    // Propriedades
    constructor (x,y){ // recebe argumentos da função
        super(x,y,70,70); // para transferir todas as propriedades da mãe para a filha! 
        this.image = loadImage("sprites/pig.png");
    }


 
}