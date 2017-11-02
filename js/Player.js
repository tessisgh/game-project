function Player(x, y, radius) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.radius = radius;
  this.friction = 0.98;
  this.maxSpeed = 15;
  this.lives = 50;
  this.points = 0;
  this.touched = false;
  this.image = new Image();
  this.image.src = "img/Impala-recortada.png";
  this.width = this.radius*2;
  this.height = this.radius*2;

  }


  Player.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

  Player.prototype.update = function() {
    if (this.x + this.radius > 895 || this.x - this.radius < 0) {
      this.vx = -this.vx*1.5;
    }
    if (this.y + this.radius > 595 || this.y - this.radius < 0){
      this.vy = -this.vy*1.5;
    }
  this.vy *= this.friction;
  this.y += this.vy;
  this.vx *= this.friction;
  this.x += this.vx;
  if(this.lives > 0){
      this.draw();
    }
  }


  Player.prototype.moveUp = function() {
    if (this.vy > -this.maxSpeed) {this.vy -= 2;}
  }

  Player.prototype.moveDown = function() {
    if (this.vy < this.maxSpeed) {this.vy += 2;}
  }

  Player.prototype.moveLeft = function() {
  if (this.vx > -this.maxSpeed) {this.vx -= 2;}
  }

  Player.prototype.moveRight = function() {
    if (this.vx < this.maxSpeed) {this.vx += 2;}
  }

  Player.prototype.playerCollision = function (particle){
      var xDistance = particle.x - this.x;
      var yDistance = particle.y - this.y;
      return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(
      yDistance, 2));
  }

  Player.prototype.isAlive = function (){
    if(this.lives <= 0){
      window.cancelAnimationFrame(reqAni);
      $(".life-status").html("Sorry, you dead");
      $(".lost").toggleClass("looserDiv");
    } else {
      $(".life-status").html("You're alive!");
      $(".lives").html(this.lives);
    }
  }

  Player.prototype.winner = function (objectRadius){
    if(this.radius > (objectRadius + 20)){
      $(".life-status").html("Yei!! You won!");
      $(".win").toggleClass("winnerDiv");
      window.cancelAnimationFrame(reqAni);
    }
  }
