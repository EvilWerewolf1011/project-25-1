class Ground{

    constructor(x,y,width,height)
    {
 
         var ground_options = {
 
             isStatic : true
 
         }
 
         this.body = Bodies.rectangle(x,y,width,height,ground_options)
 
         this.width = width;
         this.height = height;
 
         World.add(myWorld,this.body)
 
    }
 
    display(){
     rectMode(CENTER);
     fill("white");
     rect (this.body.position.x, this.body.position.y, this.width, this.height);
 }
 
 
 }