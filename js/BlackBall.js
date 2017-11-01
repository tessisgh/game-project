function BlackBall(vx, vy, vr, radius) {
  this.x = Math.random() * canvas.width-(radius*2);
  this.y = Math.random() * canvas.height-(radius*2);
  this.vx = vx;
  this.vy = vy;
  this.vr = vr;
  this.radius = radius;
  this.color = "black";
  this.minRadius = 50;
  this.maxRadius = 175;
  this.draw();
  this.update();
}

BlackBall.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  ctx.fill();
}

BlackBall.prototype.update = function() {
  if (this.x + this.radius > 790 || this.x - this.radius < 5) {
    this.vx = -this.vx*1.2;
  }
  if (this.y + this.radius > 590 || this.y - this.radius < 5) {
    this.vy = -this.vy*1.2
  }
  if(this.radius < this.maxRadius){
    this.radius += this.vr
  }
  this.x += this.vx;
  this.y += this.vy;
  this.draw();
}

BlackBall.prototype.diminish = function() {
  if (this.radius > this.minRadius) {
    this.radius -= 10;
  }
};
