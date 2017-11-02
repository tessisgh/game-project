var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 600;

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
var particles = [];
var bad;
var game;

function createGame() {
  game = new Game();
  createFood();
  player = new Player(350, 250, 20);
  player.draw();
  bad = new Leopard(3, 3, 1, 20);
  bad.draw();
}

function createFood() {
  for (i = 0; i < 5; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var vx = Math.random() - 0.5 * 12; //Velocidad en funcion de intervalos
    var vy = Math.random() - 0.5 * 12;
    var radius = Math.random() * 4 + 5;
    particles.push(new Burgers(x, y, vx, vy, radius));
  };
}

function animate() {
  reqAni = requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
  }
  player.update();
  bad.update();
  game.addPoints(player, particles);
  game.touched(player, bad);
  player.isAlive();
  player.winner(bad.radius);
  if(particles.length <1 && player.radius < bad.maxRadius){
    createFood();
    bad.draw();
    }
  }

createGame();
var reqAni = requestAnimationFrame(animate);
