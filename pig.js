class Pig {
constructor(x,y,width,height){
    var options = { 'restitution':0.8,
    'friction':0.3,
    'density':1.0}
  this.Pig = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(world,this.Pig);
  
}
display(){
    var pos= this.Pig.position
    push();
    translate(pos.x,pos.y);
    fill("lightgreen")
    rotate(this.Pig.angle)
  rectMode(CENTER);
  rect(0,0,this.width,this.height);
  pop();


}




}