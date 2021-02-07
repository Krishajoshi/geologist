class Rubber {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, width, height, options);
      //Matter.Bodies.circle(x, y, radius,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("orange")
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  