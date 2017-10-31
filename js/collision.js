// Initial Setup
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


// Variables
// var mouse = {
// 	x: 10,
// 	y: 10
// };

var colors = [
  '#2185C5',
  '#7ECEFD',
  '#FFF6E5',
  '#FF7F66'
];


// // Event Listeners
// addEventListener('mousemove', function (event){
// 	mouse.x = event.clientX;
// 	mouse.y = event.clientY;
// });

addEventListener('resize', function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});


// Utility Functions
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//
// function randomColor(colors) {
// 	return colors[Math.floor(Math.random() * colors.length)];
// }


function getDistance(x1, y1, x2, y2) {
  var xDistance = x2 - x1;
  var yDistance = y2 - y1;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(
    yDistance, 2));
}


// Objects
function BlackBall(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.velocity = {
  	x: Math.random() - 0.5,
  	y: Math.random() - 0.5
  };
  this.radius = radius;
  this.color = color;

  this.update = function(particles){
  	for (var i = 0; i < particles.length; i++) {
			console.log ("hey");
    if (this === particles[i]) continue;
    if (getDistance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) {
      console.log("have collided");
    }
  }

	if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
		this.velocity.x = -this.velocity.x;
	}
	if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
		this.velocity.y = -this.velocity.y;
	}

	this.draw();
	this.x += this.velocity.x;
  this.y += this.velocity.y;

}

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }
}



// Implementation


var particles;
// var circle1;
// var circle2;

function init() {
	// circle1 = new BlackBall (100, 100, 100, "blue");
	// circle2 = new BlackBall (300, 150, 40, "yellow");

	particles = [];

  for (i = 0; i < 5; i++) {
    var radius = 80;
    var x = randomIntFromRange(radius, canvas.width - radius);
    var y = randomIntFromRange(radius, canvas.height - radius);
    var color = "pink";

    if (i !== 0) {
      for (var j = 0; j < particles.length; j++) {
        if (getDistance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
          x = randomIntFromRange(radius, canvas.width - radius);
          y = randomIntFromRange(radius, canvas.height - radius);
          j = -1;
        }
      }
    }
    particles.push(new BlackBall(x, y, radius, color))
  }
}


// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

	// circle1.update();
	// circle2.update();
  particles.forEach(function(particles) {
  particles.update(particles);
  });
}


init();
animate();






// var canvas = document.querySelector("canvas");
// var ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
//
// function BlackBall (x, y, vx, vy, radius, color) {
//   this.x = x;
//   this.y = y;
//   this.vx = vx;
//   this.vy = vy;
//   this.radius = radius;
//   this.color = color;
//
//   this.update = function (){
//     this.draw ();
//   }
//
//   this.draw = function (){
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     ctx.fillStyle = this.color;
//     ctx.fill();
//     ctx.closePath();
//   }
//
// }
//
// // BlackBall.prototype.update = function (){
// //   this.draw ();
// // };
// //
// // BlackBall.prototype.draw = function (){
// // ctx.beginPath();
// // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
// // ctx.fillStyle = this.color;
// // ctx.fill();
// // ctx.closePath();
// // }
//
//
//
// //Implementation
// var ball;
// function init() {
// ball = new BlackBall (300, 300, 100, "black");
// console.log("Heytess");
// }
// init();
// //Animation loop
// function animate (){
//   requestAnimationFrame(animate);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//   ball.update();
// }
//
// init();
// animate();
