function WhiteBall(x, y, vx, vy, radius, color){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorBalls[Math.floor(Math.random() * colorBalls.length)];

    this.draw = function(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    this.update = function (){
      if (this.x + this.radius > 800 || this.x - this.radius < 0) {
        this.vx = -this.vx;
      }
      if (this.y + this.radius > 600 || this.y - this.radius < 0){
        this.vy = -this.vy
      }
      this.x += this.vx;
      this.y += this.vy;

      this.draw();
    }
}
