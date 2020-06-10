var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var man1img,man2ing,race

var form, player, game;

var cars =[]
var  man1, man2;


function preload(){
  man1img = loadImage("images/OIP (1).jpg")
  man2img = loadImage("images/OIP (1).jpg")
  
  race = loadImage("images/race.jpg")

}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
