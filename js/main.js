var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

addEventListener('resize', function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  game();
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
document.onkeyup = function(e) {
  player.noMove();
}

var player;
var particles;
var bad;
var colorBalls = [
  "#ff9999",
  "#3366ff",
  "#9fff80",
  "#ffff33",
]


function game() {
  particles = [];
  for (i = 0; i < 5; i++) {
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var vx = Math.random() -0.5 * 10;
    var vy = Math.random() -0.5 * 10;
    var radius = Math.random() * 4 + 5;
    var color = "";
    particles.push(new WhiteBall(x, y, vx, vy, radius, color));
  };
    player = new Player(700, 500, 20, "black");
    player.draw();
    player.movement();
    // bad = new BlackBall(0, 0, )
}



function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < particles.length; i++) {
  particles[i].update();
  console.log("hello");
  }
  player.update();
  console.log("tess");
}


game();
animate();
