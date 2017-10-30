var canvas = document.querySelector("canvas");

var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

addEventListener('resize', function() {
	canvas.width = innerWidth;
	canvas.height = innerHeight;

	init();
});

//MOVE THE Player
document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 38:
        player.moveUp();
        console.log("hey");
        break;
      case 40:
        player.moveDown();
        break;
      case 37:
        player.moveLeft();
        break;
      case 39:
        player.moveRight();
        break;
    }
  }


//   document.onkeyup = function(y) {
//     switch (y.keyCode) {
//       player.noMove();
// })

var player;
function game (){
   player = new Player (700, 500, 0, 0, 40, "black");
   player.draw();
   player.movement();
}

function animate (){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
  }

game();
animate();
