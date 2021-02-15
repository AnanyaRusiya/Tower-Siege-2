class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.Visibility=225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
       
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        if(this.body.speed<3){
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
        else{
          push();
           World.remove(world,this.body);
           this.Visibility=this.Visibility-1;
           tint(225,this.Visibility);
           pop();
      }
}
}