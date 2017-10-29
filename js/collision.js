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
// function randomIntFromRange(min,max) {
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// function randomColor(colors) {
// 	return colors[Math.floor(Math.random() * colors.length)];
// }
//
// function distance(x1, y1, x2, y2) {
//     var xDist = x2 - x1;
//     var yDist = y2 - y1;
//
//     return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
// }

function getDistance(x1, y1, x2, y2){
  var xDistance = x2 - x1;
  var yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(
    yDistance, 2));

}

// Objects
function BlackBall(x, y, radius, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;

	this.update = function (){
	this.draw();
	};

	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
	};
}


// Implementation


var particles;

function init(){
  // ball = new BlackBall (300, 300, 100, "black");
  // ball2 = new BlackBall (10, 10, 30, "red");
  particles = [];


  for (i = 0; i < 5; i ++){
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var radius = 100;
    var color = "pink";

    if (i !== 0){
      for (var j = 0; j < particles.length; j++){
        if (getDistance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0){
          x = Math.random() * innerWidth;
          y = Math.random() * innerHeight;
        }
      }
    }
    particles.push( new BlackBall (x, y, radius, color))
  }
}
// var objects;
// function init() {
// 	objects = [];
//
// 	for (var i = 0; i < 400; i++) {
// 		// objects.push();
// 	}
// }

// Animation Loop
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
  particles.update();
  // ball2.x = mouse.x;
  // ball2.y = mouse.y;
  // ball2.update();
}


//   if(getDistance(ball.x, ball.y, ball2.x, ball2.y) < ball.radius + ball2.radius){
//     ball.color = "yellow";
//   }else {
//     ball.color= "black";
//   }
//   console.log(getDistance(ball.x, ball.y, ball2.x, ball2.y));
// }

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
