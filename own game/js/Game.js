class Game {
  constructor(){

  }

  async start(){
    if(gameState === 0){
      form = new Form()
      form.display();
    }

    //car1 = createSprite(100,200);
    //car1.addImage("car1",car1_img);
    //car2 = createSprite(300,200);
    //car2.addImage("car2",car2_img);
    //car3 = createSprite(500,200);
    //car3.addImage("car3",car3_img);
    //car4 = createSprite(700,200);
    //car4.addImage("car4",car4_img);
    //cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
    
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y; 

    }

   
    drawSprites();
  }

}
