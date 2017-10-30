function Player(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.radius = radius;
  this.color = color;
  this.friction = 0.98;
  this.maxSpeed = 20;
  // this.lifes = lifes;
  this.moving = false;

  this.update = function() {
    if (this.x + this.radius > 795 || this.x - this.radius < 0) {
      this.vx = -this.vx*1.5;
    }
    if (this.y + this.radius > 595 || this.y - this.radius < 0){
      this.vy = -this.vy*1.5;
    }
  this.vy *= this.friction;
  this.y += this.vy;
  this.vx *= this.friction;
  this.x += this.vx;
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
  // this.y -= this.vy;
  if (this.vy > -this.maxSpeed) {this.vy--;}
}

Player.prototype.moveDown = function() {
  // this.y += this.vx;
  if (this.vy < this.maxSpeed) {this.vy++;}
}

Player.prototype.moveLeft = function() {
  // this.x -= this.vx;
if (this.vx > -this.maxSpeed) {this.vx--;}
}

Player.prototype.moveRight = function() {
  // this.x += this.vx;
  if (this.vx < this.maxSpeed) {this.vx++;}
}



//
// Player.prototype.pickTA(){
//
// }
//
// Player.prototype.points(){
//
// }
