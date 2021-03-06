class PlayerArrow {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.w = width;
      this.h = height;
      this.body = Bodies.rectangle(x, y, this.w, this.h, options);
      this.image = loadImage("./assets/arrow.png");
      World.add(world, this.body);
    }
    shoot(archerAngle) {
      var velocity = p5.Vector.fromAngle(archerAngle);
      console.log(archerAngle);
      velocity.mult(20);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.w, this.h);
      pop();
    }
  }
  