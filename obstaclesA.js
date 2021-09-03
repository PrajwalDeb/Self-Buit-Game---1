 function spawnObstacles(){
   if (frameCount %150 === 0){

  
   var obstacles = createSprite(1100,450,25,25);
   
obstacles.velocityX = -15;
obstacles.scale = 0.5;


var rand = Math.round(random(1,5));
switch(rand){
    case 1 : obstacles.addImage(obstacle1);
    break;
    case 2 : obstacles.addImage(obstacle2);
    break;
    case 3 : obstacles.addImage(obstacle3);
    break;
    case 4 : obstacles.addImage(obstacle4);
    break;
    case 5 : obstacles.addImage(obstacle5);
    break;
    default:break

   }

   
  obstacles.lifetime = 157;
  obstaclesGroup.add(obstacles);
  }



 }















