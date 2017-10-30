
function Player (x, y, vx, vy, radius, color) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.radius = radius;
  this.color = color;
  // this.lifes = lifes;

  this.update = function(){
    this.draw();
  }

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill()
    ctx.closePath();
  }

}



Player.prototype.movement = function(){
  this.x += this.vx;
  this.y += this.vy;
}

Player.prototype.moveUp = function(){
  this.y -= 5;
}

Player.prototype.moveDown = function(){
  this.y += 5;
}

Player.prototype.moveLeft = function(){
  this.x -=5;
}

Player.prototype.moveRight = function(){
  this.x +=5;
}

Player.prototype.noMove = function(){
  this.x= 0;
  this.y= 0;
}






//
// Player.prototype.pickTA(){
//
// }
//
// Player.prototype.points(){
//
// }
