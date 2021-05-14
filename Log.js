class Log {
    constructor(x,y,height,angle){
        var options = { 'restitution':0.8,
        'friction':1.5,
        'density':1.0}
      this.Log = Bodies.rectangle(x,y,20,height,options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.Log,angle);
      World.add(world,this.Log);
      
    }
    display(){
        var pos= this.Log.position
        push();
        translate(pos.x,pos.y);
        fill("lightgreen")
        rotate(this.Log.angle)
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    
    
    }
    
    
    
    
    }