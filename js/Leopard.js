function Leopard (vx, vy, vr, radius) {
  this.x = Math.random() * canvas.width-(radius*2);
  this.y = Math.random() * canvas.height-(radius*2);
  this.vx = vx;
  this.vy = vy;
  this.vr = vr;
  this.maxVelocity = 10;
  this.radius = radius;
  this.width = this.radius*2;
  this.height = this.radius*2;
  this.color = "black";
  this.minRadius = 50;
  this.maxRadius = 150;
  this.image = new Image();
  this.image.src = "img/guepardo-recortado-bien.png"
  this.draw();
  this.update();
}

Leopard.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
}

Leopard.prototype.update = function() {
  if (this.x + this.radius > 890 || this.x - this.radius < 10) { //y si es this.width
    this.vx = -this.vx*1;
  }
  if (this.y + this.radius > 590 || this.y - this.radius < 10) { //y si es this.height
    this.vy = -this.vy*1;
  }
  if(this.radius < this.maxRadius){
    this.radius += this.vr;
    this.width += this.vr*2;
    this.height += this.vr*2;
  }
  this.x += this.vx;
  this.y += this.vy;
  this.draw();
}

Leopard.prototype.diminish = function() {
  if (this.radius > this.minRadius) {
    this.radius -= 10;
    this.width -=20;
    this.height -=20;
  }
};
