class Glob{
    constructor(x,y,radius){
        var options={
          isStatic:false,
          resetitution:10,
          friction:0.5,
        }
        this.body=Bodies.circle(x,y,radius);
        this.radius=radius
        //this.image=loadImage();
    }
    attacks(){
        if(keyCode===UP_ARROW){
          //image=loadImage();
        }
    }
    weapons(){
       //image=loadImage
    }
    inventory(){
      if(keyCode===W){
        
      }
    }
    mousePressed(){
      if(mouseButton===RIGHT){
        weapons();
      }
    }
    display(){
     var pos=this.body.position
     push();
     translate(pos.x,pos.y);
     ellipseMode(CENTER)
     ellipse(0,0,this.radius);
     pop();
    }
}