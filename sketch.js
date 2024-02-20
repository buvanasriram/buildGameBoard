// create the track
var gameState = "play"
var enemies = []
var road = []
var roadEdge = []
var worldTiles = []
var enemies = []
var objects = []
var fireballs = []
var player
var pTankUp, pTankDown, pTankLeft, pTankRight
var eTankUp, eTankDown, eTankLeft, eTankRight
var bTankUp, bTankDown, bTankLeft, bTankRight
var tileImgs, objectImgs, fireballAnim, continueImg, overImg, winImg
tileImgs = []
objectImgs = []
var tilesGroup; 
//var roadTile, roadEdgeTile;
  

function preload() {
  
  for (var i= 0; i<31; i++) 
      tileImgs.push(loadImage("assets/Tiles/RG/"+str(i)+".png"))    
      
 
}


function createWorld(){
    let tileSize = 100
    
    for (var row= 0; row<grid.length;row++){
        for (var col= 0; col < grid[row].length;col++){
            let objectType = grid[row][col];
            //console.log(i,j,objectType) 
            let roadTile;
            let xLoc = col * tileSize;
            let yLoc = row * tileSize;    
            //roadTile = createSprite(xLoc+5*col, yLoc+5*row, tileSize, tileSize)
            roadTile = createSprite(xLoc, yLoc, tileSize, tileSize)
            roadTile.addImage(tileImgs[objectType])
            if (objectType > 20) {
                tilesGroup.add(roadTile)
            }
        }
    }
}
                
function setup(){
    createCanvas(displayWidth,displayHeight)
    tilesGroup = createGroup();
    createWorld();
    player = createSprite(100,100,50,50)
    
}

function draw() {
  background("white");
  player.collide(tilesGroup, function (player, tile){tile.shapeColor = "blue";})
  
  x = player.x
  y = player.y
  xTranslate = -x + 250
  yTranslate = -y + 300

  if (x < 250)    xTranslate = 0
  if (x > 1420)   xTranslate = -1270
  if (y < 300)    yTranslate = 0
  if (y > 1700)   yTranslate = -1400

  translate(xTranslate, yTranslate)
  
  drawSprites();
  
}

function keyPressed(){
   
    if (keyCode == RIGHT_ARROW) {
      player.setVelocity(15,0)
    }
    if (keyCode == LEFT_ARROW) {
      player.setVelocity(-15,0)
    }
    if (keyCode == UP_ARROW) {
      player.setVelocity(0,-15)
    }
    if (keyCode == DOWN_ARROW) {
      player.setVelocity(0,15)
    }

}