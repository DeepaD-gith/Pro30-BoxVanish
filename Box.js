class Box{

constructor(xpos,ypos,width,height)
{
    var rect_options={
        'restitution':0.8,
        'friction':1.0
    }
    this.body = Bodies.rectangle(xpos,ypos,width,height,rect_options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}
display()
{  
    
    var pos = this.body.position;
    var angle = this.body.angle;
   
    if(this.body.speed<3)
    {
    push();
        rectMode(CENTER);
        stroke("green");
        strokeWeight(4)
        translate(pos.x,pos.y);
        rotate(angle);  
        fill("white") ;     
        rect(0,0,this.width,this.height)
    pop();
    }
    else
    {
        World.remove(world,this.body);
    }
}

}