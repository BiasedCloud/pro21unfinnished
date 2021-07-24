class Ground{
    constructor(x,y,w,h){
        
        this.w = w;
        this.h = h;

        var ground_Options = {
            isStatic: true
        }

        this.body = Matter.Bodies.rectangle(x,y,this.w,this.h,ground_Options);
        World.add(world,this.body);
    }

    display(){
        
        push();
        fill("white")
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
}

