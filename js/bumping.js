var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


addEventListener('resize', function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});


function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(
    yDist, 2));

}

//OBJECT
function BlackBall(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.velocity = {
    x: (Math.random() - 0.5) * 5,
    y: (Math.random() - 0.5) * 5
  }
  this.radius = radius;
  this.color = color;

  this.update = function(particles) {
    this.draw();

    //COLLISION DETECTION FOR PARTICLES
    for (var i = 0; i < particles.length; i++) {
      if (this === particles[i]) continue;
      if (distance(x, y, particles[i].x, particles[i].y - this.radius * 2 < 0)) {
        console.log("has collided");
      }
    }

    if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth){
      this.velocity.x = -this.velocity.x;
    }

    if (this.y - this.radius <= 0 || this.y + this.radius >= innerWidth){
      this.velocity.y = -this.velocity.y;
    }

    this.x += this.velocty.x;
    this.y += this.velocity.y;
  };

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };
}

//IMPLEMENTATION
var particles;

function init() {
  particles = [];

  for (i = 0; i < 5; i++) {
    var radius = 80;
    var x = randomInt(radius, canvas.width - radius);
    var y = randomInt(radius, canvas.height - radius);
    var color = "pink";

    if (i !== 0) {
      for (var j = 0; j < particles.length; j++) {
        if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
          x = randomInt(radius, canvas.width - radius);
          y = randomInt(radius, canvas.height - radius);

          j = -1;
        }
      }
    }
    particles.push(new BlackBall(x, y, radius, color))
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(function(particles) {
    particles.update(particles);
  })
}

init();
animate();
