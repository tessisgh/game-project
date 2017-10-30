function BlackBall(x, y, vx, vy, vr, radius){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.vr = vr;
    // diminishing radius velocity
    this.radius = radius;
    this.minRadius = radius;
    this.color = "red";

    this.draw = function (){
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
       this.draw();
}

BlackBall.prototype.movementBlack = function(){
  this.x += this.vx;
  this.y += this.vx;
}

BlackBall.prototype.
