function Player(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.vx = 10;
  this.vy = 10;
  this.radius = radius;
  this.color = color;
  // this.lifes = lifes;

  this.update = function() {
    this.draw();
  }

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill()
    ctx.closePath();
  }
}

Player.prototype.moveUp = function() {
  this.y -= this.vy;
}

Player.prototype.moveDown = function() {
  this.y += this.vx;
}

Player.prototype.moveLeft = function() {
  this.x -= this.vx;
}

Player.prototype.moveRight = function() {
  this.x += this.vx;
}

//
// Player.prototype.pickTA(){
//
// }
//
// Player.prototype.points(){
//
// }
