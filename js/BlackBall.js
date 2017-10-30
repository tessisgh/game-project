function BlackBall(vx, vy, vr, radius){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.width;
    this.vx = vx;
    this.vy = vy;
    this.vr = vr;
    // diminishing radius velocity
    this.radius = radius;
    //this.minRadius = radius;
    this.color = "red";
    this.minRadius = 20;

    this.draw = function (){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
     }
     this.update = function () {
       if (this.x + this.radius > 795 || this.x - this.radius < 0) {
         this.vx = -this.vx;
       }
       if (this.y + this.radius > 595 || this.y - this.radius < 0){
         this.vy = -this.vy
       }
       this.radius += this.vr
       this.x += this.vx;
       this.y += this.vy;
       this.draw();
}

// --> el problema es que tengo un min radius y un radio que cambia contnuamente
// y no lo estoy contabilizando bien


}
BlackBall.prototype.diminish = function(){
  if(this.radius > this.minRadius){
    this.radius -= 10;
}
};


//
// BlackBall.prototype.grow = function (){
//   this.radius += this.vr
// }
