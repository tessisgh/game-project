function Burgers(x, y, vx, vy, radius, color){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
    this.minRadius = radius;
    this.width = this.radius*2+5;
    this.height = this.radius*2+5;
    // this.color = colorBalls[Math.floor(Math.random() * colorBalls.length)];
    this.image = new Image();
    this.image.src = "img/burger.png"
    }


    Burgers.prototype.draw = function (){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }


    Burgers.prototype.update = function (){
      if (this.x + this.radius > 895 || this.x - this.radius < 0) {
        this.vx = -this.vx;
      }
      if (this.y + this.radius > 595 || this.y - this.radius < 0){
        this.vy = -this.vy
      }
      this.x += this.vx;
      this.y += this.vy;
      this.draw();
    }
