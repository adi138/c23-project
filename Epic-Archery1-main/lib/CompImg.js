class CompImg{
    constructor(x,y,w,h){
        this.img2 = Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.x=x;
        this.y=y;
        this.image = loadImage("./assets/player2.png");
        World.add(world, this.img2);
    }

    display(){
        var pos = this.img2.position;
        var angle = this.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,150);
        pop();
    }
}