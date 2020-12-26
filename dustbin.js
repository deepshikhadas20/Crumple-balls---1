class Dustbin{
    constructor(){ 
        var option ={ 
            isStatic: true
        }
        this.body1 = Bodies.rectangle(600,670,200,20,option); 
        World.add(world,this.body1); 
        this.body2 = Bodies.rectangle(500,630,20,100,option); 
        World.add(world,this.body2); 
        this.body3 = Bodies.rectangle(700,630,20,100,option); 
        World.add(world,this.body3); 
         
    }
    display(){ 
        rectMode(CENTER); 
        fill("red"); 
        rect(this.body1.position.x,this.body1.position.y,200,20); 
        rect(this.body2.position.x,this.body2.position.y,20,100);
        rect(this.body3.position.x,this.body3.position.y,20,100);
    }
 }
