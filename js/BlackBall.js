function BlackBall(x, y, vx, vy, radius){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.vr = vr; 
    // diminishing radius velocity
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
}
