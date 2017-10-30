function Player(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
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

Player.prototype.movement = function() {
  this.x += this.vx;
  this.y += this.vy;
}

Player.prototype.moveUp = function() {
  this.y -= 10;
}

Player.prototype.moveDown = function() {
  this.y += 10;
}

Player.prototype.moveLeft = function() {
  this.x -= 10;
}

Player.prototype.moveRight = function() {
  this.x += 10;
}

Player.prototype.noMove = function() {
  this.vx = 0;
  this.vy = 0;
}


//
// Player.prototype.pickTA(){
//
// }
//
// Player.prototype.points(){
//
// }
