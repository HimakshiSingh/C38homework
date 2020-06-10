class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }


    man1 = createSprite(100,200)
    man2 = createSprite(300,200)
    man1.addImage("man1.img",man1img)
    man2.addImage("man2.img",man2img)

    /*car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
    cars = [car1, car2, car3, car4];
    car1.addImage("car1.img",car1img)
    car2.addImage("car2.img",car2img)
    car3.addImage("car3.img",car3img)
    car4.addImage("car4.img",car4img)
    */


  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      background("brown")
      image(race,0,-displayHeight+4,displayWidth,displayHeight*4)
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175;
      var y ;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }


    if(keyCode === 32 && player.index !== null){
      player.jump()
      player.distance +=10
      player.update();
    }
   if(player.distance>3860){
      gameState=2;
   }

    drawSprites();
  }
  end(){
    console.log("gameEnded")
  }
}
