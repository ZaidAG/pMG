class miniEvil{
    constructor(x, y, width, height){
        var options={
            isStatic:false,
            resetitution:1,
            friction:0.5
        }
        this.height=height;
        this.width=width;
        this.body=Bodies.rectangle(x,y,this.width,this.height);
    }
    attacks(){
      random(0,255);
    }
    display(){
    var pos=this.body.position;
    push();
     translate(pos.x,pos.y);
     rectMode(CENTER);
     rect(0,0,this.width,this.height);
     pop();
    }
}