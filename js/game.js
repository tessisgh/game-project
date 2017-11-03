function Game (){

}


Game.prototype.addPoints = function(playerInstance, burgers){
  for (var j = 0; j < burgers.length; j++) {
    if (playerInstance.playerCollision(burgers[j]) < playerInstance.radius + burgers[j].radius) {
      var radiusPoints = burgers[j].radius;
      var totalPoints = playerInstance.points += Math.floor(burgers[j].radius);
      $(".points").html(totalPoints);
      playerInstance.radius += 5;
      playerInstance.width +=5;
      playerInstance.height +=5;
      burgers.splice(j, 1);
      audio = new Audio ("../sounds/burger-sound.mp3");
      audio.play();
    }
  }
}

Game.prototype.touched = function (playerInstance, leopardInstance){
  if (playerInstance.playerCollision(leopardInstance) < playerInstance.radius + leopardInstance.radius) {
    playerInstance.lives -= 1;
    audio = new Audio ("../sounds/leopard.mp3");
    audio.play();
    playerInstance.touched = true;
  } else {
    playerInstance.touched = false;
  }
}
