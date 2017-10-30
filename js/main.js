var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

// addEventListener('resize', function() {
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;
//   game();
// });

//MOVE THE Player
document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      player.moveUp();
      bad.diminish();
      break;
    case 40:
      player.moveDown();
      bad.diminish();
      break;
    case 37:
      player.moveLeft();
      bad.diminish();
      break;
    case 39:
      player.moveRight();
      bad.diminish();
      break;
  }
}

var player;
var particles;
var bad;
// var distanceX;
// var distanceY;
var colorBalls = [
  "#ff9999",
  "#3366ff",
  "#9fff80",
  "#ffff33",
]


function game() {
  particles = [];
  for (i = 0; i < 5; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var vx = Math.random() -0.5 * 12;//Velocidad en funcion de intervalos
    var vy = Math.random() -0.5 * 12;
    var radius = Math.random() * 4 + 5;
    var color = "";
    particles.push(new WhiteBall(x, y, vx, vy, radius, color));
  };
    player = new Player(350, 250, 20, "green");
    player.draw();
    bad = new BlackBall(1, 1, 1, 20);
    console.log(bad)
    bad.draw();
    // //AQUI VA COLLISISON
    // distanceX = particles[i].x - player.x;
    // distanceY = particles[i].y - player.y;
    // var distance = Math.sqrt(dx * dx + dy * dy);

// if (distance < circle1.radius + circle2.radius) {
//     // collision detected!
// }
}



function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < particles.length; i++) {
  particles[i].update();
  }
  player.update();
  bad.update();
  //game();
}


game();
animate();
