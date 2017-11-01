var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
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
var distanceX;
var distanceY;
var colorBalls = [
  "#ff9999",
  "#3366ff",
  "#9fff80",
  "#ffff33",
]


function game() {
  createFood();
  player = new Player(350, 250, 20, "green");
  player.draw();
  bad = new BlackBall(5, 5, 1, 20);
  bad.draw();
}

function createFood() {
  for (i = 0; i < 1; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var vx = Math.random() - 0.5 * 12; //Velocidad en funcion de intervalos
    var vy = Math.random() - 0.5 * 12;
    var radius = Math.random() * 4 + 5;
    var color = "";
    particles.push(new Burgers(x, y, vx, vy, radius, color));
  };
}

function bubbleExplotion() {
}

var prueba = 0;
var deathPoints;

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
  }
  player.update();
  bad.update();
  addPoints();
  touched();
  player.isAlive();
  if(particles.length <1){
    createFood();
  }

  }

function addPoints(){
  for (var j = 0; j < particles.length; j++) {
    if (player.playerCollision(particles[j]) < player.radius + particles[j].radius) {
      var radiusPoints = particles[j].radius;
      player.points += particles[j].radius; //Math Floor
      player.radius += particles[j].radius;
      console.log("Puntuacion", player.points);
      particles.splice(j, 1);
      bubbleExplotion();
    }
  }
}

function touched(){
  if (player.playerCollision(bad) < player.radius + bad.radius) {
    //console.log("ME ESTA TOCANDO");
    player.lives -= 1;
    player.touched = true;
  } else {
    //console.log("NO ME TOCA");
    player.touched = false;
  }
}

game();
animate();
