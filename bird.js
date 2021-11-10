class Bird extends BaseClass {
    // Propriedades
    constructor (x,y){ // recebe argumentos da função
       super(x,y,50,50); // para transferir todas as propriedades da mãe para a filha! 
        this.image = loadImage("sprites/bird.png");
    }


   // Funções:
   display (){
       var pos = this.body.position;
       pos.x = mouseX;
       pos.y = mouseY;
       super.display();
   }
}