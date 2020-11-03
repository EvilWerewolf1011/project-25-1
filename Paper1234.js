class paper
{

    constructor(x,y,r)
    {

        var options = {

            //isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }

        this.x = x;
        this.y = y ;
        this.r = r;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(myWorld,this.body);

    }
    display()
    {

        var paperpos = this.body.position;

        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.r,this.r);
        image(this.image,-42, -50, 80, 80);
        pop()

    }


}