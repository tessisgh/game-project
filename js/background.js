var canvas = document.querySelector("canvas");
// looking at the element canvas of our html


var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// We are returning the context into a c, where to paint our 2d elements to be manipulated
// is going to stand for context

// ctx.fillStyle = "rgba(255, 0, 0, 0.7)";
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillStyle = "white";
// ctx.fillRect(400, 200, 100, 100);
// ctx.fillStyle = "green";
// ctx.fillRect(300, 300, 100, 100);
// console.log(canvas);
//
//
// //LINE
// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.lineTo(400, 300);
// ctx.strokeStyle = "#fa34a3";
// ctx.stroke();

// ctx.arc(x, y, radious, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false));
//CIRCLES
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = "blue";
// ctx.stroke();

// for (var i = 0; i<500; i++ ) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   ctx.beginPath();
//   ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//   ctx.fillStyle(Math.random)
//   ctx.strokeStyle = "blue";
//   ctx.stroke();
// }

var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 40;
var minRadius = 3;

var colorArray = [
  "#ff9999",
  "#3366ff",
  "#9fff80",
  "#ffff33",
]

window.addEventListener("mousemove", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener("resize",function (){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})

function Circle(x, y, vx, vy, radius) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.vy = -this.vy
    }
    this.x += this.vx;
    this.y += this.vy;

// This is where interactivity takes places
//Aqui estoy haciendo que todo aquello que este a la derecho y a la izda a 50 px del mouse crezca, pero lo de arriba y abajo crece sin control, porque no le hemos puesto una condicion!!!

if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
  if (this.radius < maxRadius){
    this.radius +=1;
  }
}else if (this.radius > this.minRadius){
  this.radius -= 1;

}

    this.draw();
  }
}

var circleArray = [];
function init(){

  circleArray = [];
  for (var i = 0; i < 800; i++){
    var radius = Math.random() * 4 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var vx = (Math.random() - 0.5)*2;
    var vy = (Math.random() - 0.5)*2;
    circleArray.push(new Circle(x, y, vx, vy, radius));
  }
}


function animate (){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }
}


init ();
animate();
  // else if (x<innerWidth) {
  //   x+= vx;
  // }
  //This creates a loop for for us, and calls animate, until we tell them to stop. But we have to call animate at the bottom
