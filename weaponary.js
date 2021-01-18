class Inventory{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            resetitution:0,
            friction:5.5
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,this.width,this.height);
    }
    display(){
        var pos=this.body.position
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      pop();
      rect(pos.x,pos.y,this.width,this.height);
    }
}