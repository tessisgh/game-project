function BlackBall(vx, vy, vr, radius) {
  this.x = Math.random() * canvas.width-radius;
  this.y = Math.random() * canvas.height-radius;
  this.vx = vx;
  this.vy = vy;
  this.vr = vr;
  this.radius = radius;
  this.color = "red";
  this.minRadius = 50;
  this.maxRadius = 200;
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
  if (this.x + this.radius > 795 || this.x - this.radius < 0) {
    this.vx = -this.vx;
  }
  if (this.y + this.radius > 595 || this.y - this.radius < 0) {
    this.vy = -this.vy
  }
  this.radius += this.vr
  this.x += this.vx;
  this.y += this.vy;
  this.draw();
}

BlackBall.prototype.diminish = function() {
  if (this.radius > this.minRadius) {
    this.radius -= 10;
  }
};
